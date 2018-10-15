import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  //获取错误详情
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  login(username: string, passwd: string): Observable<any> {
    let url = '/api/login';
    let data = new FormData();
    data.append('username', username);
    data.append('password', passwd);

    // return this.http.post(url, data) .pipe(
    //  catchError(this.handleError)
    // )

    return this.http.post(url, data) 
  }
         
        
}