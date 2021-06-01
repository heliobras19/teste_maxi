function enviar(valor) {
    $.ajax({
        type: "POST",
        url: `http://127.0.0.1:8000/api/${valor}/cadastrar`,
        data: $('#cad_cliente').serialize(),
        success: function (data) {
        }
    });
}
function mudarVisibilidade(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function deletar(id) {
    $.ajax({
        url: "http://127.0.0.1:8000/api/cliente/deletar/" + id,
        method: 'DELETE',

    })
        .done(function (data) {
            location.reload()
        });
}

function update(id, form, formid) {
    $.ajax({
        type: "POST",
        url: `http://127.0.0.1:8000/api/${form}/editar/${id}`,
        data: $(`#${formid}`).serialize(),
        success: function (data) {
            console.log("executado com sucesso");
        }
    });
}