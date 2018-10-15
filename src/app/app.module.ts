import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { SysCommonModule } from './common/sys-common.module';
import { httpInterceptorProviders } from './common/config/index'
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SysCommonModule, //导入其他关键模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,  
    NgZorroAntdModule,  //导入UI
    AppRoutingModule,   //导入路由服务
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    
    httpInterceptorProviders  //http 拦截器
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
