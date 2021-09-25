import { IrAnualService } from "../services/IrAnualService";

class IrAnualController{

async calcularIrAnual(req, res){

    const { salBrutoAnual, irRetido, inss, dependentes } = req.body

    const iranualService = new IrAnualService

    const resultado = await iranualService.calcularIrAnual(salBrutoAnual, irRetido, inss, dependentes)

    const aliquota = await iranualService.mostrarAliquota(resultado)

    return res.send({ resultado, aliquota })
}

}

export { IrAnualController }