import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Competencia} from '../uteis-model/Competencia.model';

@Injectable({providedIn: 'root'})
export class CompetenciaService {

  constructor (private _apiService: ApiService) {}

  getCompetencias(): Observable<any[]> {
    return this._apiService.getPorUrl('competencias');
  }

  getTipoCompetencias(): Observable<any[]> {
    return this._apiService.getPorUrl('tipo-competencia');
  }

  postCompetencia(competencia: Competencia): Observable<any> {
    return this._apiService.post('competencias', JSON.parse(JSON.stringify(competencia)) );
  }
}
