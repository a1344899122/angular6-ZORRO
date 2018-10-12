import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
const routes: Routes = [
  {path: "",redirectTo:'user',pathMatch:'full'},
  { 
    path: "",
    component:LayoutComponent,
    children: [
      {
        path: "user",
        loadChildren: './user/user.module#UserModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
