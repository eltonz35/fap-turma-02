/**
 * Desenvolva um programa que recebe do usuário nome completo
 * e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações,
 *o sistema mostrará o nome do usuário e a idade que completou,
ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano,
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
 */

function obterAnoNascimento() {
    while (true) {
        let ano = parseInt(prompt("Digite o ano de nascimento (1922-2021):"));
        if (!isNaN(ano) && ano >= 1922 && ano <= 2021) {
            return ano;
        } else {
            alert("Por favor, digite um ano válido (entre 1922 e 2021).");
        }
    }
}

function calcularIdade(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

let nomeCompleto = prompt("Digite seu nome completo:");
let anoNascimento = obterAnoNascimento();
let idade = calcularIdade(anoNascimento);

alert(`Olá, ${nomeCompleto}! Em 2022, você completou ou completará ${idade} anos.`);
