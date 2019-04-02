import {Component, OnInit} from '@angular/core';
import {ElementData} from '@angular/core/src/view';

export interface Avaliacao {
  competencia: string;
  peso: number;
  escala: number;
  valorEstrategico: number;
}

const ELEMENT_DATA: Avaliacao[] = [
  {
    competencia: 'Apresentação e postura',
    peso: 15,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Comunicação oral',
    peso: 9,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Comunicação gestual',
    peso: 7,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Comunicação visual',
    peso: 7,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Organização e estrutura de aula',
    peso: 7,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Clima da aula',
    peso: 7,
    escala: 0,
    valorEstrategico: 0
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayColumns: string [] = [
    'competencia',
    'peso',
    'escala',
    'valorEstrategico'];

  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
