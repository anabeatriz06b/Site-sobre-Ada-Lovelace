document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome-da-usuaria").value != "" &&
        document.getElementById("email-da-usuaria").value != "" &&
        document.getElementById("num-telefone").value != "") {
        alert("Prontinho! Você receberá as novidades por email!")
    } else {
        alert("Por favor, preencha os campos nome, email e telefone.")
    }
}