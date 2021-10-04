import { Component } from '@angular/core';

import {RecentSale,recentSales} from './recent-table-data'


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  tableData: RecentSale[];

  constructor() {
    this.tableData = recentSales;
    console.log(this.tableData[4].Date.toDateString());
  }
}
