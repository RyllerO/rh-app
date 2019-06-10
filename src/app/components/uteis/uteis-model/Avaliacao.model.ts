export class Avaliacao {
  private __membroAvaliador: string;
  private _departamento: string;
  private _professorAvaliado: string;
  private _data: Date;
  private _totalAvaliadores: number;
  private _avaliadorResponsavel: string;
  private _competencia: string [];
  private _peso: number[];
  private _escala: number[];
  private  _valorEstrategico: number[];

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

  get competencia(): string[] {
    return this._competencia;
  }

  set competencia(value: string[]) {
    this._competencia = value;
  }

  get peso(): number[] {
    return this._peso;
  }

  set peso(value: number[]) {
    this._peso = value;
  }

  get escala(): number[] {
    return this._escala;
  }

  set escala(value: number[]) {
    this._escala = value;
  }
}
