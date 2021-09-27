import { isBoolean, isString } from "util";

class IrAnualService {

    async calcularIrAnual(salBrutoAnual: number, irRetido: number, inss: number, dependentes: number) {

        if(salBrutoAnual <= 0 || isNaN(salBrutoAnual) || isBoolean(salBrutoAnual)
            || irRetido <= 0 || isNaN(irRetido) || isBoolean(irRetido)
            || inss <= 0 || isNaN(inss) || isBoolean(inss)
            || dependentes < 0 || isNaN(dependentes) || isBoolean(dependentes))
        {
            throw Error
        }

        
        const baseCalculo = salBrutoAnual - irRetido - inss - (dependentes * 189.59);
        var faixaSalarial = 0

               
        if (baseCalculo <= 22847.76) {
            faixaSalarial = 0;
        } else if (baseCalculo >= 22847.77 && baseCalculo <= 33919.80) {
            faixaSalarial = 1;
        } else if (baseCalculo >= 33919.81 && baseCalculo <= 45012.60) {
            faixaSalarial = 2;
        } else if (baseCalculo >= 45012.61 && baseCalculo <= 55976.16) {
            faixaSalarial = 3;
        } else {
            faixaSalarial = 4;
        }

  

        function aliquota() {
            let alq
            if (faixaSalarial == 0){
                return(alq = "isento")
            } else if (faixaSalarial == 1) {
                return(alq = "7.5%")
            } else if (faixaSalarial == 2) {
                return (alq = "15%") 
            } else if (faixaSalarial == 3) {
                return(alq = "22.5%")
            }else if (faixaSalarial == 4) {
                return(alq = "27.5%")
            }
        }

        switch (faixaSalarial) {
            case (faixaSalarial = 0):
                return [Number(baseCalculo * 0), aliquota()];
                break;
            case (faixaSalarial = 1):
                return [Number(baseCalculo * 0.075 - 142.8).toFixed(2), aliquota()];
                break;
            case (faixaSalarial = 2):
                return [Number(baseCalculo * 0.15 - 354.8).toFixed(2), aliquota()];
                break;
            case (faixaSalarial = 3):
                return [Number(baseCalculo * 0.225 - 636.13).toFixed(2), aliquota()];
                break;
            case (faixaSalarial = 4):
                return [Number(baseCalculo * 0.275 - 869.36).toFixed(2), aliquota()];
            default:
                console.log("Sorry, we are out of ${faixaSalarial}.");
        }

    }

}



export { IrAnualService } ;