import { IrFonteModel } from "../models/IrFonte";
import { IrNaFonteService } from "../services/IrNaFonteService";

class IrNaFonteController {
  async calcularIrFonte(req, res) {
    const { salBruto, pensaoAlimenticia, dependentes } = req.body;

    try {
      //const resultado = await irnafonteService.calcularIrNaFonte(salBruto, pensaoAlimenticia, dependentes)
      let IrFonte = new IrFonteModel();
      IrFonte.salBruto = salBruto;
      IrFonte.pensaoAlimenticia = pensaoAlimenticia;
      IrFonte.dependentes = dependentes;

      //let resultado = 0

      const irnafonteService = new IrNaFonteService();
      IrFonte.resultadoIrFonte = await irnafonteService.calcularIrNaFonte(IrFonte);

      return res.send({ resultado: IrFonte.resultadoIrFonte });
    } catch (e) {
      res.status(400).json({ error: "Algum dado inserido está inválido" });
    }
  }
}

export { IrNaFonteController };
