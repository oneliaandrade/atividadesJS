var num1, num2, op, resto, calculo;

window.alert('Calculadora');

num1 = number(prompt('Digite o número: '));
num2 = number(prompt('Digite o número: '));
op = parseInt(prompt('Digite a opção que você deseja:  1 - Soma   |     2  - Subtração    |   3 - Multiplicação   |    4 - Divisão    '));

if (op == 1) {
    calculo = num1 + num2;
    alert(`O resultado da soma é ${calculo}`);
} else if (op == 2) {
    calculo = num1 - num2;
    alert(`O resultado da subtração é ${calculo}`);
} else if (op == 3) {
    calculo = num1 * num2;
    alert(`O resultado da multiplicação é ${calculo}`);
} else if (op == 4) {
    calculo = num1 / num2;
    resto = num1 % num2
    alert(`O resultado da divisão é ${calculo} e o resto é ${resto}`);
} else {
    alert('Opção inválida');
}