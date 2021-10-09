import { isBoolean } from "util";
import { PisModel } from "../models/Pis"
import { PisEnum } from "../enums/PisEnum"

class PisService {
  async calcularPis(pis: PisModel) {
    if (pis.monthsWorked > 12 || pis.monthsWorked <= 0 || isNaN(pis.monthsWorked) || isBoolean(pis.monthsWorked)) {
      throw Error;
    }
    if (pis.monthsWorked >= 1 && pis.monthsWorked <= 12) {
      pis.resultadoImposto = pis.monthsWorked * PisEnum.BASECALC
    }

    return pis.resultadoImposto

  }
}

export { PisService };
