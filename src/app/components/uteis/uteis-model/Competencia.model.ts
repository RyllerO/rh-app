import {TipoCompetencia} from './TipoCompetencia.model';

export class Competencia {
  private _id: number;
  private _tipoCompetencia: TipoCompetencia;
  private _nome: String;
  private _descricao: String;
  private _peso: number;
  private _escala: number;
  private _valorEstrategico: number;

  toJSON() {
    return JSON.parse(JSON.stringify({
      tipoCompetencia: this.tipoCompetencia,
      nome: this.nome,
      descricao: this.descricao,
      peso: this.peso
    }));
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tipoCompetencia(): TipoCompetencia {
    return this._tipoCompetencia;
  }

  set tipoCompetencia(value: TipoCompetencia) {
    this._tipoCompetencia = value;
  }

  get descricao(): String {
    return this._descricao;
  }

  set descricao(value: String) {
    this._descricao = value;
  }

  get peso(): number {
    return this._peso;
  }

  set peso(value: number) {
    this._peso = value;
  }


  get nome(): String {
    return this._nome;
  }

  set nome(value: String) {
    this._nome = value;
  }

  get escala(): number {
    return this._escala;
  }

  set escala(value: number) {
    this._escala = value;
  }

  get valorEstrategico(): number {
    return this._valorEstrategico;
  }

  set valorEstrategico(value: number) {
    this._valorEstrategico = value;
  }
}
