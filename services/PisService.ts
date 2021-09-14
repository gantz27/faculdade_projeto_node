

class PisService {

    async calcularPis(timeWorked: number) {
        if (timeWorked >= 1 && timeWorked <= 12) {
            return timeWorked * 92
        }

    }

}

export { PisService }