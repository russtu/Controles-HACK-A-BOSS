"use strict";

// puntuaciones
const puntuaciones = [{
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

let maximaPuntuacion = 0
let mejorEquipo
let peorEquipo
let minimaPuntuacion = 0

const arrayObjetos = (array) => {
  array.forEach((equip) => {
    const laSuma = equip.puntos.reduce((acc, value) => {
      return acc + value
    })
    console.log(laSuma, equip.equipo)
    if (laSuma > maximaPuntuacion || maximaPuntuacion === 0) {
      mejorEquipo = equip.equipo
      maximaPuntuacion = laSuma
    }
    console.log(minimaPuntuacion)

    if (laSuma < minimaPuntuacion || minimaPuntuacion === 0) {
    peorEquipo = equip.equipo
    minimaPuntuacion = laSuma
  }
  })
  console.log('El equipo con la maxima puntuacion es ' + mejorEquipo + ' con: ' + maximaPuntuacion + ' puntos')
  console.log('El equipo con la minima puntuacion es ' + peorEquipo + ' con: ' + minimaPuntuacion + ' puntos')
}
arrayObjetos(puntuaciones)