// Objetos abstratos

abstract class Conta {
    cliente : string;
    num : number;
    saldo : number;


    constructor (cliente : string, num: number, saldo : number){
        this.cliente = cliente;
        this.num = num;
        this.saldo = saldo;
    }

    mostrarSaldo(){
        console.log(`Seu saldo é ${this.saldo}`)
    }

    mostrarConta(){
        console.log(`Nome: ${this.cliente}  |  Número da conta: ${this.num} `)
    }

}


class cliente extends Conta{
    cpf : string;
    tel : number;
    end : string;

    constructor(cliente : string, num: number, saldo : number, cpf : string, tel : number, end : string){
        super(cliente, num, saldo)
        this.cpf = cpf;
        this.tel = tel;
        this.end = end;
    }

}



let contaMaria = new cliente("Maria Silva", 258744, 1500, "705.541.234-25", 81256874, "Rua 55");

contaMaria.mostrarConta();
contaMaria.mostrarSaldo();

let contaJose = new cliente("José Santos", 274563, 7430, "754.523.264-85", 81547423, "Rua Manoel Augusto Monteiro, nº 45, Londres")

contaJose.mostrarConta();
contaJose.mostrarSaldo();