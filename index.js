const {registrar, leer} = require ('./operaciones.js')

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2) //valida la cantidad de argumentos

if(operacion === "registrar"){
    registrar(operacion, nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
    leer()
}

/*
app.get("/citas", (req, res) => {
    const citas = JSON.parse(fs.readFileSync("citas.json"))
    res.json(productos)
})

app.post("/citas", (req, res) => {
    const cita = req.body
    const citas = JSON.parse(fs.readFileSync("citas.json"))
    productos.push(producto)
    fs.writeFileSync("citas.json", JSON.stringify(citas))
    res.send("cita agregada con éxito!")
})
*/

/*

}*/