const form = document.getElementById('form-agenda');
const InputTelefoneContato = document.getElementById('telefone-contato');


const contatos = [];
const notas = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adiciona_linha();
    atualiza_tabela();
    atualiza_numero_contatos();


});

function adiciona_linha () {
    
    const InputNomeContato = document.getElementById('nome-contato');
    const InputTelefoneContato = document.getElementById('telefone-contato');



    if (contatos.includes(InputNomeContato.value)){
        alert(`O Contato: ${InputNomeContato.value} ja existe na lista.`)
    } else {
        contatos.push(InputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${InputNomeContato.value}</td>`;
        linha += `<td>${InputTelefoneContato.value}</td>`;
        linha += `</tr>`
        linhas += linha
    }
    InputNomeContato.value = '';
    InputTelefoneContato.value = '';
}

function atualiza_tabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualiza_numero_contatos(){

    const numero_contatos = contatos.length
    console.log(numero_contatos)
    document.getElementById('numero-de-contatos').innerHTML = numero_contatos;


}

function valida_numero (numero){
    if (numero.length > 11){
        return false
    } else {
        return true
    }
}
