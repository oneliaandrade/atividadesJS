// interface pato

interface Pato {
    grasnar(): void;
    nadar(): void;
}

//interface galinha
interface Galinha {
    cacarejar(): void;
    voar(): void;
}

//Classe pato

class PatoMarreco implements Pato {
    grasnar(): void {
        console.log("Quack! Quack!");
    }

    nadar(): void {
        console.log("Nadando...");
    }
}

//Classe galinha

class GalinhaCaipira implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voar(): void {
        console.log("Voando...");
    }
}


//Adaptador pato 

class AdaptadorPato implements Galinha {
    private readonly pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    voar(): void {
        this.pato.nadar();
    }
}


//Adaptador galinha


class AdaptadorGalinha implements Pato {
    private readonly galinha: Galinha;

    constructor(galinha: Galinha) {
        this.galinha = galinha;
    }

    grasnar(): void {
        this.galinha.cacarejar();
    }

    nadar(): void {
        this.galinha.voar();
    }
}

// implementação


class AdaptadorPatoDemo {
    static main() {
        const patoMarreco: Pato = new PatoMarreco();

        const adaptadorPato: Galinha = new AdaptadorPato(patoMarreco);

        const galinhaCaipira: Galinha = new GalinhaCaipira()

        const adaptadorGalinha: Pato = new AdaptadorGalinha(galinhaCaipira);

        console.log("Pato marreco agindo como uma galinha:");
        adaptadorPato.cacarejar();
        adaptadorPato.voar();

        console.log("Galinha caipira agindo como um pato:");
        adaptadorGalinha.grasnar();
        adaptadorGalinha.nadar();
    }
}

AdaptadorPatoDemo.main();