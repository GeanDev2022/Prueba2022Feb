import { Injectable } from '@angular/core';
//Conecta el servicio del backend(httpClient) y el (httpHeader) para configuracion
import { HttpClient, HttpHeaders } from '@angular/common/http';
// En casos de error
import { Observable, throwError } from 'rxjs';
// Captura de dichos errores
import { catchError } from 'rxjs/operators';
import { GceCaracteristicas } from './gce_caracteristicas';

@Injectable({
  providedIn: 'root'
})
export class GceCaracteristicasService {

  //Creamos la ruta
  private apiURL = 'http://localhost:8000/api/gce_caracteristica/';
  
  // Configuracion de headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    constructor(private httpClient: HttpClient) {}

    //Obtiene todas las personas
    getAll(): Observable<GceCaracteristicas[]> {
      return this.httpClient
        .get<GceCaracteristicas[]>(this.apiURL)
        .pipe(catchError(this.errorHandler));
    }
  
    //Crea una gce
    create(gce_caracteristicas: any): Observable<GceCaracteristicas> {
      return this.httpClient
        .post<GceCaracteristicas>(this.apiURL, JSON.stringify(gce_caracteristicas), this.httpOptions)
        .pipe(catchError(this.errorHandler));
    }
  
    //Busca un gce por id
    find(gce_id:any): Observable<GceCaracteristicas> {
      return this.httpClient
        .get<GceCaracteristicas>(this.apiURL + gce_id)
        .pipe(catchError(this.errorHandler));
    }
  
    //Actualiza una persona
    update(gce_id:any, gce_caracteristicas: any): Observable<GceCaracteristicas> {
      return this.httpClient
        .put<GceCaracteristicas>(this.apiURL + gce_id, JSON.stringify(gce_caracteristicas), this.httpOptions)
        .pipe(catchError(this.errorHandler));
    }
  
    //Elimina una gce
    delete(gce_id:any) {
      return this.httpClient
        .delete<GceCaracteristicas>(this.apiURL + gce_id, this.httpOptions)
        .pipe(catchError(this.errorHandler));
    }
  
    errorHandler(error:any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
  }
  