// Componente: Sanduiche
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
}

// Classe Concreta: FrangoAssado
class FrangoAssado implements Sanduiche {
    getDescricao(): string {
        return "Sanduíche de Frango Assado";
    }

    getCusto(): number {
        return 5.00;
    }
}

// Decorador: IngredienteAdicional
abstract class IngredienteAdicional implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao(): string {
        return this.sanduiche.getDescricao();
    }

    getCusto(): number {
        return this.sanduiche.getCusto();
    }
}

// Decorador Concreto: Pepperoni
class Pepperoni extends IngredienteAdicional {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${super.getDescricao()}, Pepperoni`;
    }

    getCusto(): number {
        return super.getCusto() + 0.50;
    }
}

// Decorador Concreto: QueijoMussarelaRalado
class QueijoMussarelaRalado extends IngredienteAdicional {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${super.getDescricao()}, Queijo Mussarela Ralado`;
    }

    getCusto(): number {
        return super.getCusto() + 2.00;
    }
}

// Exemplo de Uso
const meuSanduiche: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado()));

// Exibindo a descrição e o custo do sanduíche
console.log(`Sanduíche: ${meuSanduiche.getDescricao()}`);
console.log(`Custo: R$ ${meuSanduiche.getCusto()}`);