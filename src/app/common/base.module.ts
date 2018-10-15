import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigService } from './service/common/sys-common.service';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LayoutComponent,LoginComponent],
  providers:[ConfigService]

})
export class baseModule { }
