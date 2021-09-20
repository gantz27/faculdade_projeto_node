import { PisService } from "../services/PisService";

class PisController {
  async calcular(req, res) {
    const { monthsWorked } = req.body;

    const pisService = new PisService();
    try {
      const resultado = await pisService.calcularPis(monthsWorked);
      return res.send({ resultado });
    } catch (e) {
      res.status(400).json({ error: "Escreva o número do mês válido (1 - 12)" });
    }
  }
}

export { PisController };
