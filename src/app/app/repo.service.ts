import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Repo } from './repo';
import { REPOS } from './mock-repos';


@Injectable()
export class RepoService {
  //constructor (private http: Http) {}
  private queryURL = 'https://api.github.com/search/repositories?q=';

  //constructor (private http: Http) {}

  getRepos(query:string) {
    //return Promise.resolve(REPOS);

    
    return this.http.get(this.queryURL + query)
      .map(this.extractData)
      .catch(this.handleError);
    
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data.items || { };
  }

}
