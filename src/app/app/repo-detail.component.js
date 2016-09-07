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
var repo_1 = require('./repo');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
// http://www.chartjs.org/
var RepoDetailComponent = (function () {
    function RepoDetailComponent() {
        this.params = [];
        this.datasets = [{
                label: '# values',
                data: [10, 0, 20, 5]
            }];
        this.labels = ['stargazers_count', 'watchers_count', 'forks_count', 'open_issues_count'];
    }
    RepoDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.repo !== undefined) {
            var arr_1 = [];
            var textual = [];
            //this.datasets[0].data=[];
            console.log(this.repo);
            this.labels = Object.keys(this.repo);
            // properites to print
            this.params = [];
            this.labels.forEach(function (item) {
                if (typeof _this.repo[item] === 'string')
                    _this.params.push({
                        id: item,
                        val: _this.repo[item]
                    });
                return;
            });
            // properties to show on graph
            this.labels = this.labels.filter(function (item) { return Number.isFinite(_this.repo[item]) && item != 'id'; });
            // values to show on grpah
            this.labels.forEach(function (item) { return arr_1.push(_this.repo[item]); });
            console.log(this.labels);
            console.log(arr_1);
            console.log(this.params);
            this.datasets = [{
                    label: this.repo.name,
                    data: arr_1
                }];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', repo_1.Repo)
    ], RepoDetailComponent.prototype, "repo", void 0);
    RepoDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-repo-detail',
            directives: [ng2_charts_1.CHART_DIRECTIVES],
            styles: ["\n    .chart {\n      display: block;\n    }\n  "],
            template: "\n    <div *ngIf=\"repo\">\n      <div>\n        <table class=\"table table-striped\">\n          <thead>\n            <tr> <th>Property</th> <th>Value</th> </tr>\n          </thead>\n          <tr *ngFor=\"let prop of params\">\n            <th scope=\"row\">{{prop.id}}</th><td> {{prop.val}}</td>\n          </tr>\n        </table>\n      </div>\n      <base-chart\n        class=\"chart\"\n        [datasets]=\"datasets\"\n        [labels]=\"labels\"\n        [options]=\"options\"\n        [chartType]=\"'radar'\"\n        [legend]=\"'true'\">\n      </base-chart>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RepoDetailComponent);
    return RepoDetailComponent;
}());
exports.RepoDetailComponent = RepoDetailComponent;
//# sourceMappingURL=repo-detail.component.js.map