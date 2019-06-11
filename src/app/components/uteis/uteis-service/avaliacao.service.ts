import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Avaliacao} from '../uteis-model/Avaliacao.model';

@Injectable({providedIn: 'root'})
export class AvaliacaoService {

  constructor (private _apiService: ApiService) {}

  postAvaliacao(avaliacao: Avaliacao): Observable<any> {
    return this._apiService.post('avaliacao', avaliacao.toJSON());
  }
}
