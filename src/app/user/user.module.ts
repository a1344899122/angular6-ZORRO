import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomComponent } from './tom/tom.component';
import { BillComponent } from './bill/bill.component';
import { UserRoutingModule } from './user-routing.module';
import { NgZorroAntdModule} from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [TomComponent, BillComponent],
})
export class UserModule { }
