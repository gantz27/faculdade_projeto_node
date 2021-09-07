class CalculadoraService{


    async somar(param1, param2) {

        return Number(param1) + Number(param2)

    }

    async subtrair(param1, param2) {

        return Number(param1) - Number(param2)
        
    }

    async multiplicar(param1, param2) {

        return Number(param1) * Number(param2)
        
    }

    async dividir(param1, param2) {

        const resultado = Number(param1) / Number(param2)
        return Number(resultado).toFixed(3)
        
    }

    async potencia(param1, param2) {

        return Math.pow(Number(param1), Number(param2))
        
    }

    async raizQuadrada(param1, param2) {

        const resultado = Math.sqrt(Number(param1))
        return Number(resultado).toFixed(3)
        
    }


    async somarVarios(params) {

        if (!Array.isArray(params)) {
            throw Error
        }

        if (params.length < 2) {
            throw Error
        }

        let acum = 0
        params.forEach(element => {
          acum += element.numero  
        });
        return acum

    }

    async subtrairVarios(params) {

        if (!Array.isArray(params)) {
            throw Error
        }

        if (params.length < 2) {
            throw Error
        }

        let resultado = params[0].numero

        for (let i = 1; i < params.length; i++) {
            resultado -= params[i].numero
        }

        return resultado

    }

    async multiplicarVarios(params) {

        if (!Array.isArray(params)) {
            throw Error
        }

        if (params.length < 2) {
            throw Error
        }

        let resultado = params[0].numero

        for (let i = 1; i < params.length; i++) {
            resultado *= params[i].numero
        }
        return resultado

    }

    async dividirVarios(params) {

        if (!Array.isArray(params)) {
            throw Error
        }

        if (params.length < 2) {
            throw Error
        }

        let resultado = params[0].numero

        for (let i = 1; i < params.length; i++) {
            resultado /= params[i].numero
        }
        return resultado

    }

}

export { CalculadoraService }