import { IrAnualService } from "../services/IrAnualService";

class IrAnualController{

async calcularIrAnual(req, res){

    const { salBrutoAnual, irRetido, inss, dependentes } = req.body

    const iranualService = new IrAnualService

    const receberValor = await iranualService.calcularIrAnual(salBrutoAnual, irRetido, inss, dependentes)

    const aliquota = receberValor[1]
    const resultado = receberValor[0]
    
    return res.send({ resultado, aliquota })
}

}

export { IrAnualController }