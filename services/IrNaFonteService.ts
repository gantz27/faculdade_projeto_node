import { isBoolean } from "util";
import { IrFonteEnumInss } from "../enums/IrFonteEnum";
import { IrFonteModel } from "../models/IrFonte";

class IrNaFonteService {
  async calcularIrNaFonte(IrFonte: IrFonteModel) {
    console.log(typeof IrFonte.dependentes);

    if (IrFonte.salBruto <= 0 || IrFonte.pensaoAlimenticia < 0 || IrFonte.dependentes < 0 || isNaN(IrFonte.salBruto) || isNaN(IrFonte.pensaoAlimenticia) ||
      isNaN(IrFonte.dependentes) || isBoolean(IrFonte.dependentes) || isBoolean(IrFonte.salBruto) || isBoolean(IrFonte.pensaoAlimenticia)) {

      throw Error;
    }

    function calculoInss(IrFonte: IrFonteModel) {
      let valor = 0;
      let calculated = false;

      if (IrFonte.salBruto <= 1100) {
        valor += IrFonte.salBruto * IrFonteEnumInss.FIRST_PERCENT;
        calculated = true;
      } else if (!calculated) {
        valor = 1100 * IrFonteEnumInss.FIRST_PERCENT;
      }

      if (IrFonte.salBruto <= 2203.48 && !calculated) {
        valor += (IrFonte.salBruto - 1100.01) * IrFonteEnumInss.SECOND_PERCENT;
        calculated = true;
      } else if (!calculated) {
        valor += (2203.48 - 1100.01) * IrFonteEnumInss.SECOND_PERCENT;
      }

      if (IrFonte.salBruto <= 3305.22 && !calculated) {
        valor += (IrFonte.salBruto - 2203.49) * IrFonteEnumInss.THIRD_PERCENT;
        calculated = true;
      } else if (!calculated) {
        valor += (3305.22 - 2203.49) * IrFonteEnumInss.THIRD_PERCENT;
      }

      if (IrFonte.salBruto <= 6433.57 && !calculated) {
        valor += (IrFonte.salBruto - 3305.23) * IrFonteEnumInss.FOURTY_PERCENT;
        calculated = true;
      } else if (!calculated) {
        valor += (6433.57 - 3305.23) * IrFonteEnumInss.FOURTY_PERCENT;
      }
      return valor;
    }

    const inss = calculoInss(IrFonte.salBruto[0]);
    const baseSalarial =
      IrFonte.salBruto - inss - IrFonte.pensaoAlimenticia - IrFonte.dependentes * 189.59;
    let faixaSalarial = 0;

    if (baseSalarial <= 1903.98) {
      faixaSalarial = 0;
    } else if (baseSalarial >= 1903.99 && baseSalarial <= 2826.65) {
      faixaSalarial = 1;
    } else if (baseSalarial >= 2826.66 && baseSalarial <= 3751.05) {
      faixaSalarial = 2;
    } else if (baseSalarial >= 3751.06 && baseSalarial <= 4664.68) {
      faixaSalarial = 3;
    } else {
      faixaSalarial = 4;
    }

    switch (faixaSalarial) {
      case (faixaSalarial = 0):
        return baseSalarial * 0;
        break;
      case (faixaSalarial = 1):
        return Number(baseSalarial * 0.075 - 142.8).toFixed(2);
        break;
      case (faixaSalarial = 2):
        return Number(baseSalarial * 0.15 - 354.8).toFixed(2);
        break;
      case (faixaSalarial = 3):
        return Number(baseSalarial * 0.225 - 636.13).toFixed(2);
        break;
      case (faixaSalarial = 4):
        return Number(baseSalarial * 0.275 - 869.36).toFixed(2);

      default:
        console.log("Sorry, we are out of ${faixaSalarial}.");
    }
  }
}

export { IrNaFonteService };
