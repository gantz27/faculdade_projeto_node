

class PisService {

    async calcularPis(monthsWorked: number) {
        if (monthsWorked >= 1 && monthsWorked <= 12) {
            return monthsWorked * 92
        }

    }

}

export { PisService }