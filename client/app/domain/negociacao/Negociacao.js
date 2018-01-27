class Negociacao {
  constructor(_data, _quantidade, _valor) {

    Object.assign(this, {
      _quantidade,
      _valor,
    });
    this._data = new Date(_data.getTime()),

      Object.freeze(this);
  }

  get data() {
    return new Date(this._data.getTime());
  }
  get quantidade() {
    return parseInt(this._quantidade);
  }
  get valor() {
    return parseFloat(this._valor);
  }

  get volume() {
    return this._quantidade * this._valor;
  }


}