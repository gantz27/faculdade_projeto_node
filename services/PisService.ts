

class PisService {

    async calcularPis(timeWorking: number) {
        if (timeWorking >= 1 && timeWorking <= 12) {
            return timeWorking * 92
        }

    }

}

export { PisService }