"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var repo_detail_component_1 = require('./repo-detail.component');
var repo_service_1 = require('./repo.service');
var AppComponent = (function () {
    function AppComponent(repoService, http) {
        this.repoService = repoService;
        this.http = http;
        this.title = 'Repos. in Github';
        this.query = '';
        this.info = '';
    }
    AppComponent.prototype.getRepos = function () {
        var _this = this;
        this.repoService.getRepos('test').then(function (repos) { return _this.repos = repos; });
        // test on static data
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRepos();
    };
    AppComponent.prototype.onSelect = function (repo) { this.selectedRepo = repo; };
    AppComponent.prototype.searchRepo = function () {
        var _this = this;
        this.repoService.getReposthis.query.then(function (repos) { return _this.repos = repos; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12\">\n\n        <h1>{{title}}</h1>\n        <input value=\"{{query}}\" placeholder=\"Repo. name\" class=\"form-control\">\n          <button (click)=\"searchRepo\" class=\"btn btn-primary col-xs-12\">Search</button>\n\n        <div *ngIf=\"repos\">\n          Results {{info}}:\n          <ul class=\"repos\">\n            <li *ngFor=\"let repo of repos\"\n              [class.selected]=\"repo === selectedRepo\"\n              (click)=\"onSelect(repo)\">\n              <span class=\"badge\">{{repo.id}}</span> {{repo.name}}:\n            </li>\n          </ul>\n        </div>\n\n      </div>\n      <my-repo-detail [repo]=\"selectedRepo\"\n        class=\"col-md-8 col-sm-12\"></my-repo-detail>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .repos {\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .repos li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .repos li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .repos li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .row {\n      margin:0;\n    }\n    my-repo-detail{\n      border: 1px solid #ccc;\n      border-radius: 1em 0 0 1em;\n      padding: 4em 0;\n      mrgin-top: 5em;\n    }\n  "],
            directives: [repo_detail_component_1.RepoDetailComponent],
            providers: [repo_service_1.RepoService],
        }), 
        __metadata('design:paramtypes', [repo_service_1.RepoService, Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map