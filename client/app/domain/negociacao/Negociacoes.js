class Negociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
    Object.freeze(this);
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
  }

  paraArray() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes.length = 0;
    this._armadilha(this);
  }

  get volumeTotal() {
    return this._negociacoes.reduce((volume, negociacao) => volume + negociacao.volume, 0);
  }

  get media() {
    const somaTotal = this._negociacoes.reduce((total, negociacao) => total + negociacao.valor, 0);
    const totalNegociacoes = this._negociacoes.length;
    return somaTotal / totalNegociacoes || 0;
  }
}