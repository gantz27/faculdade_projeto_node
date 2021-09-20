

class IrNaFonteService {

    async calcularIrNaFonte(salBruto: number, inss: number, pensaoAlimenticia: number, dependentes: number) {

        function calculoInss($salarioBruto) {
            $valor = 0;
            $calculated = false;

            //    primeira faixa
            if ($salarioBruto <= 1100) {
                $valor += $salarioBruto * 0.075;
                $calculated = true;
            } else if (!$calculated) {
                $valor = 1100 * 0.075;
            }

            //    segunda faixa
            if ($salarioBruto <= 2203.48 && !$calculated) {
                $valor += ($salarioBruto - 1100.01) * 0.09;
                $calculated = true;
            } else if (!$calculated) {
                $valor += (2203.48 - 1100.01) * 0.09;
            }

            //terceira faixa
            if ($salarioBruto <= 3305.22 && !$calculated) {
                $valor += ($salarioBruto - 2203.49) * 0.12;
                $calculated = true;
            } else if (!$calculated) {
                $valor += (3305.22 - 2203.49) * 0.12;
            }

            //quarta faixa
            if ($salarioBruto <= 6433.57 && !$calculated) {
                $valor += ($salarioBruto - 3305.23) * 0.14;
                $calculated = true;
            } else if (!$calculated) {
                $valor += (6433.57 - 3305.23) * 0.14;
            }




            return $valor;
        }





        const baseSalarial = salBruto - inss - pensaoAlimenticia - (dependentes * 189.59)
        let faixaSalarial = 0

        if (baseSalarial <= 1903.98) {
            faixaSalarial = 0
        } else if (baseSalarial >= 1903.99 && baseSalarial <= 2826.65) {
            faixaSalarial = 1
        } else if (baseSalarial >= 2826.66 && baseSalarial <= 3751.05) {
            faixaSalarial = 2
        } else if (baseSalarial >= 3751.06 && baseSalarial <= 4664.68) {
            faixaSalarial = 3
        } else {
            faixaSalarial = 4
        }

        switch (faixaSalarial) {
            case faixaSalarial = 0:
                return (baseSalarial * 0)
                break;
            case faixaSalarial = 1:
                return Number((baseSalarial * 0.075) - 142.80).toFixed(2)
                break;
            case faixaSalarial = 2:
                return Number((baseSalarial * 0.15) - 354.80).toFixed(2)
                break;
            case faixaSalarial = 3:
                return Number((baseSalarial * 0.225) - 636.13).toFixed(2)
                break;
            case faixaSalarial = 4:
                return Number((baseSalarial * 0.275) - 869.36).toFixed(2)

            default:
                console.log("Sorry, we are out of ${faixaSalarial}.");
        }

    }

}


export { IrNaFonteService }