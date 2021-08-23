const express = require('express')
const app = express ()

app.use(express.json())

app.get("/", function(req, res) {
    res.send("primeira chamada")
})

app.get("/teste", function(req, res) {
    res.send("chamando api chamada TESTE - segunda aula...")
})

app.get("/teste/:username", function(req, res) {
    const { username } = req.params
    
    res.send({
        "message": "testando método GET com passagem de parâmetros",
        "username": username
    })

   //res.status(500).json({ error: 'username not found'})

})

app.post("/teste", function(req, res){
  //  res.send({
  //      "message": "testando metodo POST"
  //  })

    const { nome, sobrenome} = req.body

    if (nome == undefined || sobrenome == undefined) {
        res.status(500).json({ error: 'Bad Request'})
    }

    res.send({
        "message": "testando método POST",
        "nome": nome,
        "sobrenome": sobrenome
    })

})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"))