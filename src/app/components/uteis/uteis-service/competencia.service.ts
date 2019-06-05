import {ApiService} from './api.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CompetenciaService {

  constructor (private _apiService: ApiService) {

  }
}
