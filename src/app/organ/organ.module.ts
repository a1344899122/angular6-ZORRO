import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team1Component } from './team1/team1.component';
import { OrganRoutingModule } from './organ-routing.module';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { DividerComponent } from './divider/divider.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    OrganRoutingModule
  ],
  declarations: [Team1Component, DividerComponent],
})
export class OrganModule { }
