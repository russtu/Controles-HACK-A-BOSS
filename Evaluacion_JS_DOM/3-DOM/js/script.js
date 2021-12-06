'use strict'

const reloj = () => {

    const body = document.querySelector('body')
    const script = document.querySelector('script')
    const div = document.createElement('div')
    div.id = 'reloj'
    body.insertBefore(div, script)
    const interval = setInterval(() => {
        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let reloj
        if (hours < 10) {
            hours = `0${hours}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        reloj = `${hours} : ${minutes} : ${seconds} `

        div.textContent = reloj
    }, 1000)
}
reloj()