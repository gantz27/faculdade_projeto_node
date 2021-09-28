import { CideModel } from "../models/Cide"
import { CideService } from "../services/CideService"

class CideController {

  async calcular(req, res) {

    const { quantidade, tipo } = req.body

    let cide = new CideModel()
    cide.quantidadeCombustivel = quantidade
    cide.tipoCombustivel = tipo

    const cideService = new CideService
    cide = await cideService.calcularImposto(cide)

    return res.send({ cide })
  }
  
}

export { CideController }