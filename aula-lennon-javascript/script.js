function add(adicionar){
    document.getElementById('tela').value += adicionar
}

function limpar(){
    document.getElementById('tela').value = ""
}

function calcular(){
    var resultado = eval(document.getElementById('tela').value)
    document.getElementById('tela').value = resultado
}