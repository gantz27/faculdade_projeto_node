import { PisService } from "../services/PisService";
import { PisModel } from "../models/Pis"

class PisController {

  async calcular(req, res) {
    
    const { qtdSalMin, monthsWorked } = req.body;

    try {
     
      let pis = new PisModel();
      pis.qtdSalMin = qtdSalMin
      pis.monthsWorked = monthsWorked

      const pisService = new PisService
      pis = await pisService.calcularPis(pis)

      return res.send({ pis });
    } catch (e) {
      res.status(400).json({ error: "Escreva o número do mês válido (1 - 12)" });
    }
  }
}

export { PisController };
