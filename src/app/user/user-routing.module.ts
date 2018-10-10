import { NgModule } from '@angular/core';
import { TomComponent } from './tom/tom.component';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';


const routes: Routes = [
  { path: "", redirectTo: "tom" },
  {
    path: "",
    children: [
      {
        path: "tom",
        component:TomComponent
      },
      {
        path: "bill",
        component:BillComponent
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: []
})
export class UserRoutingModule { }
