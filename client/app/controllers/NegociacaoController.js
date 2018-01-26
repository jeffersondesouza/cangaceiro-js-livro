class NegociacaoController {


  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();

    const data = DataConverter.paraData(this._inputData.value);

    const negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

    const diaMesAno = DataConverter.paraTexto(negociacao.data);

    console.log(negociacao);
    console.log(diaMesAno);

//    const converter = new DataConverter().paraTexto(negociacao.data);

  }
}

