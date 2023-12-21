import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from '../mms-common/mms-common.module';
import { DistributeComponent } from './distribute/distribute.component';



@NgModule({
  declarations: [
    InsertFormComponent,
    DistributeComponent
  ],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      {path: 'insert', component: InsertFormComponent},
      {path: 'distribute', component: DistributeComponent}
    ])
  ]
})
export class FixedAssetModule { }
