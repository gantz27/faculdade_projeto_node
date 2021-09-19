

class IrNaFonteService {

    async calcularIrNaFonte(salBruto: number, inss: number, pensaoAlimenticia: number, dependentes: number){
        const baseSalarial = salBruto  - inss - pensaoAlimenticia - (dependentes*189.59) 
        let faixaSalarial = 0

        if (baseSalarial <= 1903.98){
            faixaSalarial = 0
        }else if (baseSalarial >= 1903.99 && baseSalarial <= 2826.65){
            faixaSalarial = 1
        }else if (baseSalarial >= 2826.66 && baseSalarial <= 3751.05) {
            faixaSalarial = 2
        }else if(baseSalarial >= 3751.06 && baseSalarial <= 4664.68) {
            faixaSalarial = 3
        }else {
            faixaSalarial = 4
        }

        switch (faixaSalarial) {
            case faixaSalarial = 0:
                return (baseSalarial * 0)
                break;
            case faixaSalarial = 1:
                return Number((baseSalarial*0.075) - 142.80).toFixed(2)
                break;
            case faixaSalarial = 2:
                return Number((baseSalarial*0.15) - 354.80).toFixed(2)
                break;
            case faixaSalarial = 3:
                return Number((baseSalarial*0.225) - 636.13).toFixed(2)
                break;
            case faixaSalarial = 4:
                return Number((baseSalarial*0.275) - 869.36).toFixed(2)

            default:
                console.log("Sorry, we are out of ${faixaSalarial}.");
        }
        
    }

}


export { IrNaFonteService }