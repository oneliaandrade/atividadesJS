class sistemaSegurança{
    private static instance: sistemaSegurança;
    private senha : string = "SoftexRecife#2023131509@"

    private constructor(){
    }

    public static getInstance(): sistemaSegurança {
        if (!sistemaSegurança.instance) {
            sistemaSegurança.instance = new sistemaSegurança();
        }

        return sistemaSegurança.instance;
    }

    acessarBase(senha : string){
        if(senha == this.senha){
            console.log("Acesso concedido!");
            console.log("Bem-vindo(a) à MI7, agente.");
        } else {
            console.log("Acesso negado!");
        }
    }

}

// Programa principal
const sistemaSeguranca = sistemaSegurança.getInstance();

// Tentativas de acesso 
sistemaSeguranca.acessarBase("SoftexRecife#2023131509@");


sistemaSeguranca.acessarBase("1234");