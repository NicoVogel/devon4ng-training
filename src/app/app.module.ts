import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {OverviewModule} from "./overview/overview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
    OverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
