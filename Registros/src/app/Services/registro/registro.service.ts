import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { map, catchError} from 'rxjs/operators';
import { Registro } from 'src/app/Model/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService extends BaseService{

  private url: string = 'registro/';

  constructor(http: HttpClient) { super(http)}

  obtenerTodos(): Observable<any> {
    return this.getServiceObservable(this.url+'all').pipe(map(data => data));
  }

  crearRegistro(registro: Registro): Observable<any>{
    return this.postServiceObservableP(this.url+'save', registro).pipe(map(data => data));
  }

  modificarRegistro(registro: Registro[]): Observable<any>{
    return this.postServiceObservableP(this.url+'update', registro).pipe(map(data=> data));
  }
}
