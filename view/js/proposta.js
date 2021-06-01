window.onload = function () {
    getPropostas()
    nome = "Helio"
    estado = "Terminar sessão"
    document.getElementById('logo').innerText = 'Propostas'
    document.getElementById('cadastrar_clientes').style.display = 'none';
    document.getElementById('dados_pessoais').innerHTML = `<br><p> ${nome} </p> <p> ${estado}</p> <p style='cursor: pointer;' onclick="location.href='index.html'" >  Clientes </p>`
    cliente()
}
var tabela = document.getElementById("proposta")
function mudarVisibilidade(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function getPropostas() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/proposta/mostrar",
        method: 'GET',

    })
        .done(function (data) {
            listarCliente(data.data);
        });
}

function cliente() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/cliente/mostrar",
        method: 'GET',

    })
        .done(function (data) {
            var files = data.data;
            console.log(files)
            for (let i = 0; i <= files.length; i++) {
                document.getElementById('select-cliente').innerHTML += `<option value='${files[i]['id']}'>${files[i]['nome_fantasia']}</option>`
            }
        });
}



function listarCliente(data) {
    for (i = 0; i < data.length; i++) {
        escrever(data[i]['endereco_obra'], data[i]['valor_total'], data[i]['sinal'], data[i]['quantidade_parcelas'], data[i]['valor_parcelas'], data[i]['data_inicio_pagamento'], data[i]['nome_fantasia'], data[i]['status'], data[i]['id'])
    }
}

function escrever(endereco_obra, valor_total, valor_total, sinal, quantidade_parcelas, valor_parcelas, nome_fantasia, status, id) {
    var alternativa = 'toto'
    if (status == 'ativado') {
        alternativa = 'desativado'
    }
    if (status == 'desativado') {
        alternativa = 'ativado'
    }
    if (status != 'ativado' && status != 'desativado') {
        status = 'desativado'
        alternativa = 'ativado'
    }
    tabela.innerHTML += `<tr>
                            <td>${endereco_obra}</td>
                            <td>${valor_total}</td>
                            <td>${sinal}</td>
                            <td>${quantidade_parcelas}</td>
                            <td>${valor_parcelas}</td>
                            <td>${valor_total}</td>
                            <td>${nome_fantasia}</td>
                            <td><select id='status_${id}' name='status' onchange="update(${id}, 'proposta', 'status_${id}')"><option  value='${status}' selected>${status}</option>
                                        <option value='${alternativa}'>${alternativa}</option>
                            <select></td>
                            <td style="color: red; cursor: pointer" onclick="deletar(${id})"> <i class="fa fa-trash"></i></td>
            <tr>
                `
}