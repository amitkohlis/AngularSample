import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private httpClient: HttpClient ) { }

  getList(apiurl: string, page: number, count: number): Observable<any> {
    let params = new HttpParams()
			.set('page', page.toString())
			.set('count', count.toString());

    return this.httpClient.get<any>(`/${apiurl}}?${params.toString()}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(apiurl: string,id: string | number): Observable<any> {
    return this.httpClient.get<any>(`/${apiurl}}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  add(apiurl: string,post: any): Observable<any> {
    return this.httpClient.post(`/${apiurl}}`, post)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(apiurl: string,id: string | number): Observable<any> {
    return this.httpClient.delete(`/${apiurl}}/${id}`) 
      .pipe(
        catchError(this.handleError)
      );
  }

  update(apiurl: string,post: any) {
    return this.httpClient.put(`/${apiurl}}`,post)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }
}