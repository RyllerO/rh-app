import { Component, OnInit } from '@angular/core';
import {CompetenciaService} from '../uteis/uteis-service/competencia.service';
import {Competencia} from '../uteis/uteis-model/Competencia.model';
import {TipoCompetencia} from '../uteis/uteis-model/TipoCompetencia.model';

@Component({
  selector: 'app-cadastro-competencia',
  templateUrl: './cadastro-competencia.component.html',
  styleUrls: ['./cadastro-competencia.component.css']
})
export class CadastroCompetenciaComponent implements OnInit {

  public listaCompetencias: Competencia[];
  public listaTipoCompetencias: TipoCompetencia[];
  public competencia: Competencia = new Competencia();

  constructor(private competenciaService: CompetenciaService) { }

  ngOnInit() {
    this.getTipoCompetencias();
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

  getTipoCompetencias() {
    this.competenciaService.getTipoCompetencias().subscribe(
      data => {
        console.log(data);
        this.listaTipoCompetencias = data;
      },
      err => console.log(err)
    );
  }

  limpar() {
    this.competencia = new Competencia();
  }

  salvarCompetencia() {
    this.competenciaService.postCompetencia(this.competencia).subscribe(
      resposta => {
        console.log(resposta);
        this.getCompetencias();
        this.limpar();
      },
      err => console.log(err)
    );
  }

  deletarCompetencia(competencia: Competencia) {
    this.competenciaService.deleteCompetencia(competencia.id).subscribe(
      () => {
        this.getCompetencias();
        this.limpar();
      },
      error1 =>
        console.log(error1)
    );
  }

}
