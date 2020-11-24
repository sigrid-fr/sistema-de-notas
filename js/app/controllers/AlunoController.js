class AlunoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome' );
        this._inputPrimeiraNota = $('#primeiraNota' );
        this._inputSegundaNota = $('#segundaNota' );
        this._inputFrequencia = $('#frequencia' );
        this._inputFinal = $('#final' );

        this._aluno = new Aluno(); 

        this._alunoView = new AlunoView($('#js-cadastroAlunoView') );
        this._alunoView.update(this._aluno );
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event ) {
        
        event.preventDefault();
      
        var cadastro = this._criaCadastroAluno();
        this._aluno.adiciona(cadastro ); 
        this._alunoView.update(this._aluno );

        this._limpaFormulario();


        this._mensagem.texto = `Aluno(a) ${cadastro.nome} foi adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
    }

    _criaCadastroAluno() {
        return new CadastroAluno(
            this._inputNome.value,
            this._inputPrimeiraNota.value,
            this._inputSegundaNota.value,
            this._inputFrequencia.value,
            this._inputFinal.value  
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputPrimeiraNota.value = '';
        this._inputSegundaNota.value = '';
        this._inputFrequencia.value = '';
        this._inputFinal.value = '';

        this._inputNome.focus();
    }
}