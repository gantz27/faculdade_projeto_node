import { isNumber, isString } from "util";

class PisService {
  async calcularPis(monthsWorked: number) {
    if (monthsWorked > 12 || monthsWorked <= 0 || isNaN(monthsWorked) ||isString(monthsWorked)) {
      throw Error;
    }
    if (monthsWorked >= 1 && monthsWorked <= 12) {
      return monthsWorked * 92;
    }
  }
}

export { PisService };
