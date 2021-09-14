import { PisService } from "../services/PisService";


class PisController {

    async calcular(req, res) {

        const { timeWorked } = req.body

        const pisService = new PisService

        const resultado = await pisService.calcularPis(timeWorked)

        return res.send({ resultado })

    }

}

export { PisController }