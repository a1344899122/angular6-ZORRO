import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team1Component } from './team1/team1.component';
import { DividerComponent } from './divider/divider.component';
const routes: Routes = [
  {path: "",redirectTo:'team1'},
  {
    path: "", 
    children: [
      {
        path: "team1",
        component:Team1Component
      },
      {
        path: "divider",
        component:DividerComponent
      },


      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: []
})
export class OrganRoutingModule { }
