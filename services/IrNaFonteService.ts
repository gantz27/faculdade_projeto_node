import { isBoolean } from "util";
import { IrEnumPercent, IrDep, IrFonteEnumDeducao, IrFonteEnumInss } from "../enums/IrFonteEnum";
import { IrFonteModel } from "../models/IrFonte";

class IrNaFonteService {
  async calcularIrNaFonte(IrFonte: IrFonteModel) {

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

    const inss = calculoInss(IrFonte);
    const baseSalarial = IrFonte.salBruto - inss - IrFonte.pensaoAlimenticia - (IrFonte.dependentes * IrDep.dependentes);
    IrFonte.inss = Number(inss.toFixed(2))
    
    if (baseSalarial <= 1903.98) {
      IrFonte.resultadoIrFonte = baseSalarial * IrEnumPercent.ZERO_RANGE;
    } else if (baseSalarial >= 1903.99 && baseSalarial <= 2826.65) {
      IrFonte.resultadoIrFonte = baseSalarial * IrEnumPercent.FIRST_RANGE - Number(IrFonteEnumDeducao.FIRST_DEDUCTION.toFixed(2));
    } else if (baseSalarial >= 2826.66 && baseSalarial <= 3751.05) {
      IrFonte.resultadoIrFonte = baseSalarial * IrEnumPercent.SECOND_RANGE - Number(IrFonteEnumDeducao.SECOND_DEDUCTION.toFixed(2));
    } else if (baseSalarial >= 3751.06 && baseSalarial <= 4664.68) {
      IrFonte.resultadoIrFonte = baseSalarial * IrEnumPercent.THIRD_RANGE - Number(IrFonteEnumDeducao.THIRD_DEDUCTION.toFixed(2));
    } else {
      IrFonte.resultadoIrFonte = baseSalarial * IrEnumPercent.FOURTY_RANGE - Number(IrFonteEnumDeducao.FOURTY_DEDUCTION.toFixed(2));
    }

    return Number(IrFonte.resultadoIrFonte.toFixed(2));
  }
}

export { IrNaFonteService };
