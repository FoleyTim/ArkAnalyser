import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { MockServerService } from './mock-server.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  tickers = ['TDOC', 'SQ', 'SI', 'PYPL', 'OPEN', 'DSYSJ', 'LSPD']
  values =[820, 932, 901, -934, 1290, 1330, 1320]
  options = {
    color: '#202325',
    xAxis: {
      type: 'category',
      data: this.tickers,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.values,
        type: 'bar',
      },
    ],
  };

  mergeOption: any;
  loading = false;

  constructor(private http: HttpClient) { }
}