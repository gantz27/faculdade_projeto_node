import { CalculadoraController } from "./controllers/CalculadoraController"
import { PisController } from "./controllers/PisController"
import { IrNaFonteController } from "./controllers/IrNaFonteController"

const calculadoraController = new CalculadoraController()
const pisController = new PisController()
const irnafonteController = new IrNaFonteController()

const express = require('express')
const app = express()

app.use(express.json())



app.get("/calc/somar/:param1/:param2", calculadoraController.somar)
app.get("/calc/subtrair/:param1/:param2", calculadoraController.subtrair)
app.get("/calc/multiplicar/:param1/:param2", calculadoraController.multiplicar)
app.get("/calc/dividir/:param1/:param2", calculadoraController.dividir)
app.get("/calc/potencia/:param1/:param2", calculadoraController.potencia)
app.get("/calc/raizQuadrada/:param1", calculadoraController.raizQuadrada)

// AULA 06/09
app.post("/somar-varios", calculadoraController.somarVarios)
app.post("/subtrair-varios", calculadoraController.subtrairVarios)
app.post("/multiplicar-varios", calculadoraController.multiplicarVarios)
app.post("/dividir-varios", calculadoraController.dividirVarios)

// IMPOSTO PIS TESTE
app.post("/pis/calcular",pisController.calcular)

// CALCULAR IR NA FONTE TESTE V1.0
app.post("/irfonte/calcularIrNaFonte",irnafonteController.calcularIrFonte)

app.listen(3333, () => console.log("Servidor executando na porta 3333"))