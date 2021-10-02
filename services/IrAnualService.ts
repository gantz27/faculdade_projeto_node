import { isBoolean, isString } from "util";
import { IrAnualModel } from "../models/IrAnual";
import { anual, taxasDeducaoAnual } from "../enums/IrAnualEnum"
import { IrDep, IrEnumPercent } from "../enums/IrFonteEnum";
class IrAnualService {
  async calcularIrAnual(IrAnual: IrAnualModel) {
    if (
      IrAnual.salBrutoAnual <= 0 || isNaN(IrAnual.salBrutoAnual) ||
      isBoolean(IrAnual.salBrutoAnual) || IrAnual.irRetido <= 0 ||
      isNaN(IrAnual.irRetido) || isBoolean(IrAnual.irRetido) ||
      IrAnual.inss <= 0 || isNaN(IrAnual.inss) ||
      isBoolean(IrAnual.inss) || IrAnual.dependentes < 0 ||
      isNaN(IrAnual.dependentes) || isBoolean(IrAnual.dependentes)
    ) {
      throw Error;
    }

    const baseCalculo = IrAnual.salBrutoAnual - IrAnual.irRetido - IrAnual.inss - IrAnual.dependentes * IrDep.dependentes * anual.meses;

    if (baseCalculo <= 22847.76) {
      IrAnual.aliquota =  "isento";
      IrAnual.resultadoImpostoAnual = Number(baseCalculo * IrEnumPercent.ZERO_RANGE);
    } else if (baseCalculo >= 22847.77 && baseCalculo <= 33919.8) {
      IrAnual.aliquota =  "7.5%";
      IrAnual.resultadoImpostoAnual = Number((baseCalculo * IrEnumPercent.FIRST_RANGE - taxasDeducaoAnual.taxaONE).toFixed(2)
      );
    } else if (baseCalculo >= 33919.81 && baseCalculo <= 45012.6) {

      IrAnual.aliquota = "15%";
      IrAnual.resultadoImpostoAnual = Number((baseCalculo * IrEnumPercent.SECOND_RANGE - taxasDeducaoAnual.taxaSECOND).toFixed(2)
      );
    } else if (baseCalculo >= 45012.61 && baseCalculo <= 55976.16) {
      IrAnual.aliquota = "22.5%";
      IrAnual.resultadoImpostoAnual = Number((baseCalculo * IrEnumPercent.THIRD_RANGE - taxasDeducaoAnual.taxaTHIRD).toFixed(2)
      );
    } else {
      IrAnual.aliquota = "27.5%"
      IrAnual.resultadoImpostoAnual = Number((baseCalculo * IrEnumPercent.FOURTY_RANGE - taxasDeducaoAnual.taxaFOURTY).toFixed(2)
      );
    }

    return IrAnual.resultadoImpostoAnual;
  }
}

export { IrAnualService };
