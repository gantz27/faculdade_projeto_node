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

}

export { CalculadoraService }