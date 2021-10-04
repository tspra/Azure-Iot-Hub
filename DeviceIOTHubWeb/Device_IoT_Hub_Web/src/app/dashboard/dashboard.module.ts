import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { TotalVariablesComponent } from './dashboard-components/total-variables/total-variables.component';
import { variationgraphcomponent } from './dashboard-components/variation-graph/variationgraphcomponent';
import { TemperatureComponent } from './dashboard-components/temperature/temperature.component';
import { HumidityComponent } from './dashboard-components/humidity/humidity.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatCardModule} from '@angular/material/card';   
import { HighchartsChartModule } from 'highcharts-angular';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule,
    NgxGaugeModule,MatCardModule,HighchartsChartModule],
  declarations: [DashboardComponent, 
    TotalVariablesComponent, variationgraphcomponent, TemperatureComponent,
    HumidityComponent
    
    ]
})
export class DashboardModule {

}
