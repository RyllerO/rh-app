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
  },
  {
    competencia: 'Clareza nas Explicações',
    peso: 15,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Controle do tempo',
    peso: 5,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Conhecimento do Conteúdo',
    peso: 17,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Qualidade do planejamento e execução das aulas',
    peso: 0,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Compromisso com registros acadêmicos',
    peso: 0,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Assiduidade e Pontualidade',
    peso: 0,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Competencia com a Operacionalização',
    peso: 0,
    escala: 0,
    valorEstrategico: 0
  },
  {
    competencia: 'Participação do professor nas atividades institucionais',
    peso: 0,
    escala: 0,
    valorEstrategico: 0
  },
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

  getTotalPesos() {
    return this.dataSource.map(t => t.peso).reduce((acc, value) => acc + value, 0);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
