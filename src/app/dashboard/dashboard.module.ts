import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MmsCommonModule } from '../mms-common/mms-common.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MmsCommonModule,
      MatGridListModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      NgxChartsModule,
      FlexLayoutModule,
      TranslateModule,
      NgApexchartsModule,
      RouterModule.forChild([
        {path: '', component: DashboardComponent}
      ])
    ]
})
export class DashboardModule { }
