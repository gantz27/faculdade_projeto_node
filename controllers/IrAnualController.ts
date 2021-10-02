import { IrAnualService } from "../services/IrAnualService";
import { IrAnualModel } from "../models/IrAnual";

class IrAnualController {
  async calcularIrAnual(req, res) {
    const { salBrutoAnual, irRetido, inss, dependentes } = req.body;

    try {
      let IrAnual = new IrAnualModel();
      IrAnual.salBrutoAnual = salBrutoAnual;
      IrAnual.irRetido = irRetido;
      IrAnual.inss = inss;
      IrAnual.dependentes = dependentes;
      
      const iranualservice = new IrAnualService();
      IrAnual.resultadoImpostoAnual = await iranualservice.calcularIrAnual(IrAnual);

      return res.send({ resultado: IrAnual.resultadoImpostoAnual, aliquota: IrAnual.aliquota });
    } catch (e) {
      res.status(400).json({ error: "Algum dado inserido está inválido !" });
    }
  }
}

export { IrAnualController };
