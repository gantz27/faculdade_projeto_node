import { PisService } from "../services/PisService";


class PisController {

    async calcular(req, res) {

        const { timeWorking } = req.body

        const pisService = new PisService

        const resultado = await pisService.calcularPis(timeWorking)

        return res.send({ resultado })

    }

}

export { PisController }