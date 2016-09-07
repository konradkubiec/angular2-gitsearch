import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GitSearchAppAppComponent } from '../app/git-search-app.component';

beforeEachProviders(() => [GitSearchAppAppComponent]);

describe('App: GitSearchApp', () => {
  it('should create the app',
      inject([GitSearchAppAppComponent], (app: GitSearchAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'git-search-app works!\'',
      inject([GitSearchAppAppComponent], (app: GitSearchAppAppComponent) => {
    expect(app.title).toEqual('git-search-app works!');
  }));
});
