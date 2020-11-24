class CadastroAluno {

  
    constructor(nome, primeiraNota, segundaNota, frequencia, final) {
        
        this._nome = nome;
        this._primeiraNota = primeiraNota;
        this._segundaNota = segundaNota;
        this._frequencia = frequencia;
        this._final = final;

        Object.freeze(this );
    }

    
    get nome() {
        return this._nome;
    }
    
    get primeiraNota() {
        return this._primeiraNota;
    }
    
    get segundaNota() {
        return this._segundaNota;
    }

    get frequencia() {
        return this._frequencia;
    }

    get final() {
        return this._final;
    }

    get media() {
        let mediaFinal = (parseFloat(this.primeiraNota) + parseFloat(this.segundaNota)) / 2;
        if(mediaFinal >= 70 ){
            return mediaFinal;
        }
        else
            if(mediaFinal >= 30 || mediaFinal < 70){
                mediaFinal = (parseFloat(mediaFinal) + parseFloat(this.final)) / 2;
                return mediaFinal;
        }
        else{
            return mediaFinal;
        }

    }

    get situacao(){

        if(this.frequencia < 75){

            return 'REPROVADO';            

        }else if(this.media > 70){

            return 'APROVADO';
            
        }else if(this.media >= 30 || this.media < 70) {

            let mediaFinal = (  parseFloat(this.media) + parseFloat(this.provaFinal)  ) / 2;
            
            if(mediaFinal < 50 ){
                return 'REPROVADO';
            }else{
                return 'APROVADO';
            }            
        }else{
            return 'REPROVADO'; 
        }
    }

}
