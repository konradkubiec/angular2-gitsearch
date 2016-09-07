import { Component, OnInit } from '@angular/core';

import { Repo } from './repo';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoService } from './repo.service';


@Component({
  selector: 'my-app',
  template: `
    <div class="row">
      <div class="col-md-4 col-sm-12">

        <h1>{{title}}</h1>
        <input value="{{query}}" placeholder="Repo. name" class="form-control">
          <button (click)="searchRepo" class="btn btn-primary col-xs-12">Search</button>

        <div *ngIf="repos">
          Results {{info}}:
          <ul class="repos">
            <li *ngFor="let repo of repos"
              [class.selected]="repo === selectedRepo"
              (click)="onSelect(repo)">
              <span class="badge">{{repo.id}}</span> {{repo.name}}:
            </li>
          </ul>
        </div>

      </div>
      <my-repo-detail [repo]="selectedRepo"
        class="col-md-8 col-sm-12"></my-repo-detail>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .repos {
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .repos li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      height: 1.6em;
      border-radius: 4px;
    }
    .repos li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .repos li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .row {
      margin:0;
    }
    my-repo-detail{
      border: 1px solid #ccc;
      border-radius: 1em 0 0 1em;
      padding: 4em 0;
      mrgin-top: 5em;
    }
  `],
  directives: [RepoDetailComponent],
  providers: [RepoService],
})

export class AppComponent implements OnInit {
  title = 'Repos. in Github';
  repos: Repo[];
  selectedRepo: Repo;
  query: string = '';
  info: string ='';


  constructor(
    private repoService: RepoService
    ,private http: Http) {
  }

  getRepos() {
    this.repoService.getRepos('test').then(repos => this.repos = repos);
    // test on static data
  }

  ngOnInit() {
    this.getRepos();
  }

  onSelect(repo: Repo) { this.selectedRepo = repo; }

  searchRepo(){
    this.repoService.getReposthis.query.then(repos => this.repos = repos);
  }

    //  .then(repos => this.repos = repos);
}
