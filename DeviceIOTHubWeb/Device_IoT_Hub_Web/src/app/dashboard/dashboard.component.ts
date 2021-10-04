import { Component, AfterViewInit, Input } from '@angular/core';
import { DeviceData } from '../model/device';
import { SignalRService } from '../service/signlrService';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  streamData: DeviceData = new DeviceData();
  
  //subtitle: string;
  
  constructor(private signalRService: SignalRService) { }

  ngAfterViewInit() {}

  ngOnInit() {
    this.signalRService.init();
    this.signalRService.mxChipData.subscribe(data => {
      this.streamData = JSON.parse(data);
    });
  }
}
