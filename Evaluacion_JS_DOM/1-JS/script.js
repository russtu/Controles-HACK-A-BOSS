const contest = () => {
    const password = (Math.round(Math.random() * 100))
    alert('Bienvenido al Concurso , tienes 5 intentos para acertar un numero del 1 al 100, empecemos:')
    for (let i = 5; i > 0; i--) {
        const numberUser = prompt('Dime un número')
        console.log(numberUser)
        if (password === +numberUser) {
            alert('Has acertado, ¡¡ENHORABUENA!! ')
            break
        } else if (i == 1) {
            alert('Has perdido')
        } else if (numberUser < password) {
            alert(`La contraseña es un numero mayor, prueba otra vez, te quedan ${i - 1 } intentos`)
        } else if (numberUser > password) {
            alert(`La contraseña es numero menor, prueba otra vez, te quedan ${i -1 } intentos`)
        }
    }
}
contest()