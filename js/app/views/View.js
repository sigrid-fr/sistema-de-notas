class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(aluno ) {
        this._elemento.innerHTML = this._template(aluno );
    }

    _template(aluno ) {
        throw new Error('O método template deve ser implementado nas subclasses');
    }

}