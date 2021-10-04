import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'device-graph',
  templateUrl: './variation.graph.component.html'
})
export class variationgraphcomponent implements OnInit {

  public lineChartLegend = true;
  public lineChartType = 'line';
  @Input() temp: any;
  @Input() humidity: any;
  public tempData :any= [];
  public humidityData :any = [];
  constructor() {

  }

  ngOnInit() {
    this.humidity = {

    }
    this.temp = {

    }

  }



  // lineChart
  public lineChartData: Array<any> = [
    { data: [], label: 'Temperature' },
    { data: [], label: 'Humidity' }
  ];


  public lineChartLabels: Array<string> = [
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
  ];

  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public lineChartColors: Array<Object> = [
    {
      // grey
      backgroundColor: 'rgba(41, 98, 255,0.1)',
      borderColor: '#98a6ad',
      pointBackgroundColor: '#98a6ad',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#98a6ad'
    },
    {
      // dark grey
      backgroundColor: 'rgba(116, 96, 238,0.1)',
      borderColor: '#2cabe3',
      pointBackgroundColor: '#2cabe3',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2cabe3'
    }
  ];
  ngOnChanges(changes: SimpleChanges) {
   
    if (changes.humidity && changes.temp) 
    {

      let tempData = this.lineChartData[0];
      let humData = this.lineChartData[1];
      if(changes.temp.currentValue)
      {
        tempData.data.push(changes.temp.currentValue);
      }
     if(changes.humidity.currentValue)
     {
      humData.data.push(changes.humidity.currentValue);
     }
      this.lineChartData = [];
      this.lineChartData.push(tempData);
      this.lineChartData.push(humData);

    }
  }

}
