import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MmsCommonModule } from '../mms-common/mms-common.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../fixed-asset/fixed-asset.module').then(
            (m) => m.FixedAssetModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MmsCommonModule  
  ]
})
export class AdminModule { }
