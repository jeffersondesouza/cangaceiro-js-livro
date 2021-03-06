class NegociacaoController {


  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');


/* 
    this._negociacoes = new Negociacoes(model => this._negociacoesView.update(model));
 */

    this._negociacoesView = new NegociacoesView('#negociacoes');
    //    this._negociacoesView.update(this._negociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView('#mensagemView');
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();
    this._negociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();
    //  this._negociacoesView.update(this._negociacoes);
    this._mensagem.texto = 'Negociação	adicionada	com	sucesso';
    this._mensagemView.update(this._mensagem);
  }

  apaga() {
    this._negociacoes.esvazia();
    this._mensagem.texto = 'Negociaçẽs apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
    this._negociacoesView.update(this._negociacoes);
  }

  _criaNegociacao() {
    const data = DataConverter.paraData(this._inputData.value);
    return new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0
    this._inputData.focus();
  }

}

