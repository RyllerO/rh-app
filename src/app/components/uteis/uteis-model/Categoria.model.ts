import {TipoCompetencia} from './TipoCategoria.model';

export class Categoria {
  private _id: number;
  private _tipoCompetencia: TipoCompetencia;
  private _descricao: String;
  private _peso: number;

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
}
