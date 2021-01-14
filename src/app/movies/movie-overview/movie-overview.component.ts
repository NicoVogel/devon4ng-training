import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { tap, switchMap, filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  selectedMovie?: Movie;
  movies$ = this.movieService.findAll();

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter((params) => params.id !== undefined),
      switchMap(params => this.movieService.findOne(+params.id))).subscribe(movie => this.selectedMovie = movie);
  }

  selectMovie(movie: Movie) {
    this.router.navigate(['movies/', movie.id]);
  }

  isMovieSelected(movie: Movie) {
    return this.selectedMovie && this.selectedMovie.id === movie.id;
  }

  onMovieUpdated(updatedMovie: Movie) {
    this.movieService.save(updatedMovie)
      .pipe(tap(m => this.selectMovie(m)))
      .subscribe({
        complete: () => this.movies$ = this.movieService.findAll()
      });
  }

  onMovieCreate() {
    this.selectedMovie = {};
  }

}
