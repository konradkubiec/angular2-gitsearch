import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { ReposComponent }      from './heroes.component';
import { RepoDetailComponent }  from './hero-detail.component';
import { RepoService }          from './hero.service';
import { RepoSearchComponent }  from './hero-search.component';
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RepoDetailComponent,
    ReposComponent,
    RepoSearchComponent
  ],
  providers: [
    RepoService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}