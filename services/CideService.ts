import { CideModel } from "../models/Cide"
import { CideEnumPercentual, CideEnumTipo } from "../enums/CideEnum"

class CideService {

  async calcularImposto(cide: CideModel) {
    if (cide.tipoCombustivel === CideEnumTipo.GASOLINA) {
      cide.valorImposto = cide.quantidadeCombustivel * CideEnumPercentual.GASOLINA
    } else if (cide.tipoCombustivel === CideEnumTipo.DIESEL) {
      cide.valorImposto = cide.quantidadeCombustivel * CideEnumPercentual.DIESEL
    } 

    return cide
  }

}

export { CideService }