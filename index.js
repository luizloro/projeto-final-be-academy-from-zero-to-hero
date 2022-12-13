/* Mascara Telefone */
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

/* Try Catch repósitorio img unsplash */

/* Timer do Header*/
const timeLeft = document.querySelector('#timer')
const nextYear = new Date().getFullYear() + 1
const newYearTimer = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCoutDown = () => {
    const currentTime = new Date()
    const difference = newYearTimer - currentTime
    const days = Math.floor(difference / 1000 / 60 /60 / 24)
    const hours = Math.floor(difference / 1000 /60 /60) % 24
    const minutes = Math.floor(difference / 1000 /60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    timeLeft.textContent = seconds < 10 ? '0' + seconds : seconds

    timeLeft.textContent = `Expira em: ${days} Dias ${hours} Horas : ${minutes} : Minutos : ${seconds} Segundos`


}

setInterval(updateCoutDown, 1000)