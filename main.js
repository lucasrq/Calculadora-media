
let form = document.getElementById('formulario')

let corpoAgenda = document.querySelector('.corpoTabela')


let linhas = '';

let nomes = []
let numeros = []



function adicionaLinha() {
    let inputNome = document.querySelector('.Nome').value;
    let inputNumero = parseInt(document.querySelector('.Telefone').value);

    nomes.push(inputNome);
    numeros.push(inputNumero);

    let linha = '<tr class="itemNovo">';
    linha += `<td>${inputNome}`;
    linha += `<td>${inputNumero}`;

    linhas += linha;
}

function atualizaTabela() {
    corpoAgenda.innerHTML = linhas
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})