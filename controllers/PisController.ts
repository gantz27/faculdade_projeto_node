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
      pis.resultadoImposto = await pisService.calcularPis(pis)

      return res.send({ Resultado: pis.resultadoImposto });
    } catch (e) {
      res.status(400).json({ error: "Escreva um número mês válido ou quantidade de sálarios excedente" });
    }
  }
}

export { PisController };
