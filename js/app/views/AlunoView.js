class AlunoView extends View {

    constructor(elemento) {
        super(elemento );
    }

    _template(aluno ) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr style="background-color: #EEE">
                    <th style="text-align: center">NOME</th>
                    <th style="text-align: center">NOTA 1</th>
                    <th style="text-align: center">NOTA 2</th>
                    <th style="text-align: center">FREQUÊNCIA (%)</th>
                    <th style="text-align: center">PROVA FINAL</th>
                    <th style="text-align: center">SITUAÇÃO</th>
                    <th style="text-align: center">MÉDIA FINAL</th>
                    
                </tr>
            </thead>
        
            <tbody>
                ${aluno.itens.map(cadastro => `
                    
                    <tr style="text-align: center">
                        <td>${cadastro.nome}</td>
                        <td>${cadastro.primeiraNota}</td>
                        <td>${cadastro.segundaNota}</td>
                        <td>${cadastro.frequencia}</td>
                        <td>${cadastro.final}</td>
                        <td>${cadastro.situacao}</td>
                        <td>${cadastro.media}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

           <tfoot>
                <tr style="background-color: #F0FFF0">
                    <td style="font-weight: bold">Média Geral da Turma</td>
                    <td colspan="5"></td>
                    <td>
                        ${
                            (aluno.itens.reduce((totalMedias, valor) => (totalMedias) + parseFloat(valor.media) , 0) 
                            /aluno.itens.reduce((iterador) => (iterador) + 1 , 0)).toFixed(2)
                        }
                    </td>
                </tr>
            </tfoot>

            <tfoot>
                <tr style="background-color: #FFFFF0">
                    <td style="font-weight: bold">Total de Reprovados</td>
                    <td colspan="5"></td>
                    <td>
                    ${aluno.itens.reduce((total, valor) => total + parseFloat( valor.situacao == 'REPROVADO' ? 1 : 0 ) , 0 )}
                    </td>
                </tr>
            </tfoot>

            <tfoot>
                <tr>
                    <td style="font-weight: bold">Total de Aprovados</td>
                    <td colspan="5"></td>
                    <td>
                    ${aluno.itens.reduce((total, valor) => total + parseFloat( valor.situacao == 'APROVADO' ? 1 : 0 ) , 0 )}
                    </td>
                </tr>
            </tfoot>

            
        </table>
        `;
    }
}
