import {Competencia} from './Competencia.model';

export class Avaliacao {
  private _membroAvaliador: string;
  private _departamento: string;
  private _professorAvaliado: string;
  private _data: string;
  private _totalAvaliadores: number;
  private _avaliadorResponsavel: string;
  private _competencias: Competencia[];

  toJSON() {
    return JSON.parse(JSON.stringify({
      membroAvaliador: this.membroAvaliador,
      departamento: this.departamento,
      professorAvaliado: this.professorAvaliado,
      data: this.data,
      totalAvaliadores: this.totalAvaliadores,
      avaliadorResponsavel: this.avaliadorResponsavel,
      competencias: this.competencias
    }));
  }


  get membroAvaliador(): string {
    return this._membroAvaliador;
  }

  set membroAvaliador(value: string) {
    this._membroAvaliador = value;
  }

  get departamento(): string {
    return this._departamento;
  }

  set departamento(value: string) {
    this._departamento = value;
  }

  get professorAvaliado(): string {
    return this._professorAvaliado;
  }

  set professorAvaliado(value: string) {
    this._professorAvaliado = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  get totalAvaliadores(): number {
    return this._totalAvaliadores;
  }

  set totalAvaliadores(value: number) {
    this._totalAvaliadores = value;
  }

  get avaliadorResponsavel(): string {
    return this._avaliadorResponsavel;
  }

  set avaliadorResponsavel(value: string) {
    this._avaliadorResponsavel = value;
  }

  get competencias(): Competencia[] {
    return this._competencias;
  }

  set competencias(value: Competencia[]) {
    this._competencias = value;
  }
}
