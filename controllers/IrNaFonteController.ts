import { IrNaFonteService } from "../services/IrNaFonteService";


class IrNaFonteController {

    async calcularIrFonte(req, res) {

        const { salBruto, pensaoAlimenticia, dependentes } = req.body

        const irnafonteService = new IrNaFonteService
        try{
          const resultado = await irnafonteService.calcularIrNaFonte(salBruto,pensaoAlimenticia, dependentes)

          return res.send({ resultado })
      }catch(e){
        res.status(400).json({ error: 'Algum dado inserido está inválido' })
      }
    }
}

export { IrNaFonteController }