import {Competencia} from './Competencia.model';

export class Avaliacao {
  private __membroAvaliador: string;
  private _departamento: string;
  private _professorAvaliado: string;
  private _data: Date;
  private _totalAvaliadores: number;
  private _avaliadorResponsavel: string;
  private _competencias: Competencia[];

  get _membroAvaliador(): string {
    return this.__membroAvaliador;
  }

  set _membroAvaliador(value: string) {
    this.__membroAvaliador = value;
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

  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
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
