import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';


@Component({
  selector: 'device-graph',
  templateUrl: './variation.graph.component.html'
})
export class variationgraphcomponent implements OnInit {

  public lineChartLegend = true;
  public lineChartType = 'line';
  @Input() temp: any;
  @Input() humidity: any;
  public tempData: any = [];
  public humidityData: any = [];
  constructor() {

  }

  ngOnInit() {
    // this .lineChartData = [
    //   { data: [32,34,35,26,28,37,31,40,42,28,30,32,26], label: 'Temperature' },
    //   { data: [72,75,77,64,68,70,73,75,72,71,75,80,78], label: 'Humidity' }
    // ];
    // let count = this.lineChartData[0].data.length;

    // for(let n = 1; n <= count; n++){
    //      this.lineChartLabels.push(n);
    //   }
  }



  // lineChart
  public lineChartData: Array<any> = [
    { data: [], label: 'Temperature' },
       { data: [], label: 'Humidity' }
  ];
  public lineChartLabels: Array<number> = [1,2,3,4,5,6,7];


  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        id: 'Temperature',
        type: 'linear',
        scaleLabel: {
          labelString: 'Temperature (ºC)',
          display: true,
        },
        position: 'left',
      }
      ]

    }

  };



  ngOnChanges(changes: SimpleChanges) {

    if (changes.humidity && changes.temp) {

      this.lineChartLabels = [];
      let tempData = this.lineChartData[0];
      let humData = this.lineChartData[1];
      if (changes.temp.currentValue) {
        tempData.data.push(changes.temp.currentValue);
      }
      if (changes.humidity.currentValue) {
        humData.data.push(changes.humidity.currentValue);
      }
      this.lineChartData = [];
      this.lineChartData.push(tempData);
      this.lineChartData.push(humData);

      let count = this.lineChartData[0].data.length;

      for (let n = 1; n <= count; n++) {
        this.lineChartLabels.push(n);
      }
    }
  }

}
