class Aluno {
   
    constructor() {
        this._itens = [];
    }

    adiciona (cadastro ) {
        this._itens.push(cadastro );
    }

    get itens() {
       return [].concat(this._itens );
    }

    



}