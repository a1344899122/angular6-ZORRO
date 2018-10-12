import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  {path: "",redirectTo:'user',pathMatch:'full'},
  {path: "login",pathMatch:'full',component:LoginComponent},
  { 
    path: "",
    component:LayoutComponent,
    children: [
      {
        path: "user",
        loadChildren: './user/user.module#UserModule'
      },

      {
        path: "organ",
        loadChildren: './organ/organ.module#OrganModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
