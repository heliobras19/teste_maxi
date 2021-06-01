var dados = document.getElementById("dados_pessoais")
var design = document.getElementById("design")
var tabela = document.getElementById("cleintes")
var campo_pesquisa = document.getElementById("valor")
var nome = "Hélio"
var estato = "Terminar sessão"
var campo = null;

window.onload = function () {
    document.getElementById('cadastrar_clientes').style.display = 'none'
    document.getElementById('logo').innerText = 'Clientes'
    getCliente()
}

dados.innerHTML = `<br><p> ${nome} </p> <p> ${estato}</p> <p style='cursor: pointer;' onclick="location.href='propostas.html'" >  Propostas </p>`

function getCliente() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/cliente/mostrar",
        method: 'GET',

    })
        .done(function (data) {
            listarCliente(data.data);
        });
}

function pesquisar() {
    var valor = document.getElementById("valor").value
    $.ajax({
        url: `http://127.0.0.1:8000/api/cliente/pesquisar/${campo}/${valor}`,
        method: 'GET',

    })
        .done(function (data) {
            listarCliente(data.data)
            console.log(data.data)
        });

}

function listarCliente(data) {
    tabela.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        escrever(data[i]['nome_fantasia'], data[i]['cpf'], data[i]['nome_responsavel'], data[i]['cnpj'], data[i]['endereco'], data[i]['email'], data[i]['celular'], data[i]['razao_social'], data[i]['id'])
    }
}

function listarPropostas_cliente(id) {
    $.ajax({
        url: `http://127.0.0.1:8000/api/proposta/cliente/${id}`,
        method: 'GET',
    })
        .done(function (data) {
            document.getElementById('propostas-atreladas').innerHTML = ''
            files = data.data
            for (let i = 0; i < files.length; i++) {
                document.getElementById('propostas-atreladas').innerHTML +=
                    `
                <tr>
                <td>${files[i]['endereco_obra']}</td>
                <td>${files[i]['valor_total']}</td>
                <td>${files[i]['valor_parcelas']}</td>
                <td>${files[i]['quantidade_parcelas']}</td>
                </tr>
                `

            }
        });

}
$("#btnExport").click(function (e) {
    window.open('data:application/vnd.ms-excel,' + $('#proposta-all').html());
    e.preventDefault();
});

function escrever(nome, cpf, nome_responsavel, cnpj, endereco, email, celular, razao_social, id) {
    tabela.innerHTML += `<tr onclick="listarPropostas_cliente(${id})" style="cursor: pointer;" data-toggle="modal" data-target=".bd-example-modal-lg">
                            <td>${nome}</td>
                            <td>${cpf}</td>
                            <td>${cnpj}</td>
                            <td>${endereco}</td>
                            <td>${email}</td>
                            <td>${nome_responsavel}</td>
                            <td>${celular}</td>
                            <td>${razao_social}</td>
                            <td style="color: red; cursor: pointer" onclick="deletar(${id})"> <i class="fa fa-trash"></i></td>
            <tr>
                `
}




function editar(valor_atual, id) {

}
