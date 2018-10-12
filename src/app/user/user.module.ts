import { CommonModule } from '@angular/common';
import { TomComponent } from './tom/tom.component';
import { BillComponent } from './bill/bill.component';
import { UserRoutingModule } from './user-routing.module';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlexComponent } from './alex/alex.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [TomComponent, BillComponent, AlexComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
