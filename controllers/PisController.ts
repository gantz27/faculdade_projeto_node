import { PisService } from "../services/PisService";
import { PisModel } from "../models/Pis"

class PisController {

  async calcular(req, res) {
    
    const { monthsWorked } = req.body;

    try {
     
      let pis = new PisModel();
      pis.monthsWorked = monthsWorked

      const pisService = new PisService
      pis.resultadoImposto = await pisService.calcularPis(pis)

      return res.send({ Resultado: pis.resultadoImposto });
    } catch (e) {
      res.status(400).json({ error: "Escreva um número mês válido !" });
    }
  }
}

export { PisController };
