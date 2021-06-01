function formCadastro() {
    mudarVisibilidade('cadastrar_clientes')
}

function mudarVisibilidade(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function mudar_design() {
    var select = document.getElementById('select_param')
    var option = select.children[select.selectedIndex]
    var texto = option.textContent
    design.innerHTML = `${texto}`
    campo = texto;
}


