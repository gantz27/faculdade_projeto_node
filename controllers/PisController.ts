import { PisService } from "../services/PisService";


class PisController {

    async calcular(req, res) {

        const { monthsWorked } = req.body

        const pisService = new PisService

        const resultado = await pisService.calcularPis(monthsWorked)

        return res.send({ resultado })

    }

}

export { PisController }