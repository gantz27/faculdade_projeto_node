import { isBoolean } from "util";
import { PisModel } from "../models/Pis"

class PisService {
  async calcularPis(pis: PisModel) {
    if (pis.monthsWorked > 12 || pis.monthsWorked <= 0 || isNaN(pis.monthsWorked) || isBoolean(pis.monthsWorked)) {
      throw Error;
    }
    if (pis.qtdSalMin <= 2 && pis.qtdSalMin > 0 && pis.monthsWorked >= 1 && pis.monthsWorked <= 12) {
      pis.resultadoImposto = pis.monthsWorked * 12
    }

    return pis

  }
}

export { PisService };
