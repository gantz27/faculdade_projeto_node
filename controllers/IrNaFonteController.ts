import { IrNaFonteService } from "../services/IrNaFonteService";


class IrNaFonteController {

    async calcularIrFonte(req, res) {

        const { salBruto, inss, pensaoAlimenticia, dependentes } = req.body

        const irnafonteService = new IrNaFonteService

        const resultado = await irnafonteService.calcularIrNaFonte(salBruto, inss, pensaoAlimenticia, dependentes)

        return res.send({ resultado })

    }
}

export { IrNaFonteController }