
class NegociacoesView extends View {

  template(negociacoes) {
    return `
    <table class="table	table-hover	table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
          <th>MÉDIA</th>
        </tr>
      </thead>
      <tbody>
      ${negociacoes.paraArray().map(negociacao => this.toTrTemplate(negociacao)).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td	colspan="3"></td>
          <td>${negociacoes.volumeTotal}</td>
          <td>${negociacoes.media}</td>
        </tr> 
      </tfoot>
    </table>
    `;
  }

  toTrTemplate(negociacao) {
    return ` 
      <tr>
        ${this.toTdTemplate(DataConverter.paraTexto(negociacao.data))}
        ${this.toTdTemplate(negociacao.quantidade)}
        ${this.toTdTemplate(negociacao.valor)}
        ${this.toTdTemplate(negociacao.volume)}
      </tr>
    `;
  }

  toTdTemplate(data) {
    return `<td>${data}</td>`;
  }


}