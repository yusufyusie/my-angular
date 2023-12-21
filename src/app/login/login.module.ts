import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MmsCommonModule } from '../mms-common/mms-common.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MmsCommonModule,
    MatButtonModule,
    TranslateModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ]),
  ]
})
export class LoginModule { }
