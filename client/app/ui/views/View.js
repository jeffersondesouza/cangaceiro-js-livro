class View {

  constructor(selector) {
    this.elemento = document.querySelector(selector);
  }

  update(model) {
    this.elemento.innerHTML = this.template(model);
  }

  template(model){
    throw new Error('Você precisa implementar o método template em: ', this);
  }

}