let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function verificarClick() {
  console.log("Botão clicado");
}

function exibirMensagem() {
  alert("Eu amo JS");
}

function perguntaCidade() {
  let cidade = prompt("Digite uma cidade do Brasil");
  alert(`Estive em ${cidade} e lembrei de você`);
}

function numerosSoma() {
  let numero1 = parseInt(prompt("Digite um número"));
  let numero2 = parseInt(prompt("Digite outro número"));
  let soma = numero1 + numero2
  alert(`A soma dos números é igual a ${soma}`);
}