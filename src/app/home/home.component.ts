import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['01-JAN', '02-JAN', '03-JAN', '04-JAN', '05-JAN', '06-JAN', '07-JAN'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [60, 65, 63, 52, 61, 55, 10],
      label: 'ACTIVE USERS',
      backgroundColor: 'rgba(252, 74, 26,0.7)',
      borderColor: '#fc4a1a',
      hoverBackgroundColor: '#fc4a1a',
      hoverBorderColor:'#fc4a1a',
      borderWidth: 2,
    },
    {
      data: [10, 5, 7, 18, 9, 15, 60],
      label: 'INACTIVE USERS',
      backgroundColor: 'rgba(255, 106, 0, 0.7)',
      borderColor: '#f7b733',
      hoverBackgroundColor: '#f7b733',
      hoverBorderColor: '#f7b733',
      borderWidth: 2
    }
  ];


}
