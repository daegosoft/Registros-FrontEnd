
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private urlResources: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  protected getServiceObservable(url: string): Observable<any> {
    return this.http.get(this.urlResources + url, httpOptions);
  }

  protected getServiceObservableParams(url: string, params: HttpParams): Observable<any> {
    return this.http.get(this.urlResources + url, {headers: httpOptions.headers, params });
  }

  protected postServiceObservable(url: string): Observable<any> {
    return this.http.post(this.urlResources + url, httpOptions);
  }

  protected postServiceObservableP(url: string, body: any): Observable<any> {
    return this.http.post(this.urlResources + url, body, httpOptions);
  }

  protected postServiceObservableParams(url: string, body: any, params: HttpParams): Observable<any> {
    return this.http.post(this.urlResources + url, body, {headers: httpOptions.headers, params});
  }

  protected putServiceObservable(url: string): Observable<any> {
    return this.http.put(this.urlResources + url, httpOptions);
  }

  protected putServiceObservableP(url: string, body: any): Observable<any> {
    return this.http.put(this.urlResources + url, body, httpOptions);
  }

  protected putServiceObservableParams(url: string, params: HttpParams): Observable<any> {
    return this.http.put(this.urlResources + url, {headers: httpOptions.headers, params });
  }

  protected deleteServiceObservable(url: string): Observable<any>{
    return this.http.delete(this.urlResources + url, httpOptions);
  }

  protected deleteServiceObservableP(url: string): Observable<any>{
    return this.http.delete(this.urlResources + url, httpOptions);
  }

  protected deleteServiceObservableParams(url: string, params: HttpParams): Observable<any>{
    return this.http.delete(this.urlResources + url, { headers: httpOptions.headers, params });
  }
}
