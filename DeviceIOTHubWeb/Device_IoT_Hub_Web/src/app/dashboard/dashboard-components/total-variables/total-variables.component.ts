import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-variables',
  templateUrl: './total-variables.component.html',
  styleUrls: ['./total-variables.component.css']
})
export class TotalVariablesComponent implements OnInit {
  @Input() deviceId: any;
 
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.deviceId) {
      this.deviceId = changes.deviceId.currentValue;
    
    }
  }

}
