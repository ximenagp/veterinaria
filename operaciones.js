const fs=require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
        citas.push({ 
        nombre,
        edad,
        animal,
        color,
        enfermedad
        })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Se ha grabado la cita!')
}

const leer = () => {
    const citas = fs.readFileSync('citas.json','utf8')
    JSON.parse(citas).forEach(citas => {
        console.log(citas)
    })
}
module.exports = {registrar, leer}