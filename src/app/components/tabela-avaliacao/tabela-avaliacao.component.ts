import { Component, OnInit } from '@angular/core';
import {CompetenciaService} from '../uteis/uteis-service/competencia.service';
import {Competencia} from '../uteis/uteis-model/Competencia.model';
import {Avaliacao} from '../uteis/uteis-model/Avaliacao.model';
//
// export interface Avaliacao {
//   competencia: string;
//   peso: number;
//   escala: number;
//   valorEstrategico: number;
// }
//
// const ELEMENT_DATA: Avaliacao[] = [
//   {
//     competencia: 'Apresentação e postura',
//     peso: 15,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Comunicação oral',
//     peso: 9,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Comunicação gestual',
//     peso: 7,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Comunicação visual',
//     peso: 7,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Organização e estrutura de aula',
//     peso: 7,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Clima da aula',
//     peso: 7,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Clareza nas Explicações',
//     peso: 15,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Controle do tempo',
//     peso: 5,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Conhecimento do Conteúdo',
//     peso: 17,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Qualidade do planejamento e execução das aulas',
//     peso: 0,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Compromisso com registros acadêmicos',
//     peso: 0,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Assiduidade e Pontualidade',
//     peso: 0,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Competencia com a Operacionalização',
//     peso: 0,
//     escala: 0,
//     valorEstrategico: 0
//   },
//   {
//     competencia: 'Participação do professor nas atividades institucionais',
//     peso: 0,
//     escala: 0,
//     valorEstrategico: 0
//   },
// ];

@Component({
  selector: 'app-tabela-avaliacao',
  templateUrl: './tabela-avaliacao.component.html',
  styleUrls: ['./tabela-avaliacao.component.css']
})
export class TabelaAvaliacaoComponent implements OnInit {

  public listaCompetencias: Competencia[];

  public competencia: Competencia = new Competencia();

  public avaliacao: Avaliacao = new Avaliacao();

  constructor(private competenciaService: CompetenciaService) { }

  // displayColumns: string [] = [
  //   'competencia',
  //   'peso',
  //   'escala',
  //   'valorEstrategico'];
  // dataSource = this.listaCompetencias;
  //
  // getTotalPesos() {
  //   return this.dataSource.map(t => t.peso).reduce((acc, value) => acc + value, 0);
  // }

  ngOnInit() {
    this.getCompetencias();
  }

  getCompetencias() {
    this.competenciaService.getCompetencias().subscribe(
      data => {
        console.log(data);
        this.listaCompetencias = data;
      },
      error1 => console.log(error1)
    );
  }

}
