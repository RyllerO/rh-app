export class TipoCompetencia {
  private _id: number;
  private _nome: String;

  toJSON() {
    return JSON.parse(JSON.stringify({
      _id: this.id
    }));
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): String {
    return this._nome;
  }

  set nome(value: String) {
    this._nome = value;
  }
}
