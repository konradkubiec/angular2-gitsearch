import { Component, Input } from '@angular/core';
import { Repo } from './repo';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
// http://www.chartjs.org/

@Component({
  selector: 'my-repo-detail',
  directives: [CHART_DIRECTIVES],
  styles: [`
    .chart {
      display: block;
    }
  `],
  template: `
    <div *ngIf="repo">
      <div>
        <table class="table table-striped">
          <thead>
            <tr> <th>Property</th> <th>Value</th> </tr>
          </thead>
          <tr *ngFor="let prop of params">
            <th scope="row">{{prop.id}}</th><td> {{prop.val}}</td>
          </tr>
        </table>
      </div>
      <base-chart
        class="chart"
        [datasets]="datasets"
        [labels]="labels"
        [options]="options"
        [chartType]="'radar'"
        [legend]="'true'">
      </base-chart>
    </div>
  `
})


export class RepoDetailComponent {
  @Input()
  repo: Repo;

  ngOnChanges() {
    if(this.repo !== undefined){
      let arr : number[] = [];
      let textual : string[] = [];

      //this.datasets[0].data=[];
      console.log(this.repo);
      this.labels = Object.keys(this.repo);

      // properites to print
      this.params = [];
      this.labels.forEach(
        item => { if(typeof this.repo[item] === 'string')
          this.params.push({
            id: item,
            val: this.repo[item]
          })
          return;
        }
      );

      // properties to show on graph
      this.labels = this.labels.filter(
        item => Number.isFinite(this.repo[item]) && item != 'id'
        //no need for id on graph
      );

      // values to show on grpah
      this.labels.forEach(
        item => arr.push(this.repo[item])
      );

      console.log(this.labels);
      console.log(arr);
      console.log(this.params);

      this.datasets = [{
        label: this.repo.name,
        data: arr
      }];
    }
  }

  params = [];
  datasets = [{
      label: '# values',
      data: [10, 0, 20, 5]
  }];

  labels = ['stargazers_count', 'watchers_count', 'forks_count', 'open_issues_count'];
}
