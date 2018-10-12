import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { baseModule } from './base.module';
@NgModule({
  imports: [
    CommonModule,
    baseModule
  ],
  declarations: [],

})
export class SysCommonModule { }
