import { IrAnualService } from "../services/IrAnualService";

class IrAnualController {
  async calcularIrAnual(req, res) {
    const { salBrutoAnual, irRetido, inss, dependentes } = req.body;

    const iranualService = new IrAnualService();
    try {
      const receberValorDaFuncao = await iranualService.calcularIrAnual(salBrutoAnual, irRetido, inss, dependentes);

      const aliquota = receberValorDaFuncao[1];
      const resultado = receberValorDaFuncao[0];

      return res.send({ resultado, aliquota });
    } catch (e) {
      res.status(400).json({ error: "Algum dado inserido está inválido !" });
    }
  }
}

export { IrAnualController };
