import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {

  private _apiURL = 'http://localhost:4200/api/';

  constructor (private _http: HttpClient) {}

  public getPorId(sufixo: string, id: number): Observable<any> {
    return this._http.get(`${this._apiURL}/${sufixo}/${id}`);
  }

  getPorUrl(sufixo: string): Observable<any> {
    return this._http.get(`${this._apiURL}${sufixo}`);
  }

  public getPorIdentificador(sufixo: string, identificador: string): Observable<any> {
    return this._http.get(`${this._apiURL}/${sufixo}/${identificador}`);
  }

  public put(sufixo: string, json: JSON): Observable<any> {
    // console.log(json);
    return this._http.put(`${this._apiURL}${sufixo}`, json);
  }

  public post(sufixo: string, json: JSON): Observable<any> {
    // console.log(json);
    return this._http.post(`${this._apiURL}${sufixo}`, json);
  }

  public delete(sufixo: string): Observable<any> {
    // console.log(json);
    return this._http.delete(`${this._apiURL}${sufixo}`);
  }

}
