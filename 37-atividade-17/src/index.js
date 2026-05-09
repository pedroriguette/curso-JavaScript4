import './styles/index.css'
const dayjs = require("dayjs")

const calculateDay = (bithday) => {
    const dateNow = dayjs()
    const bithdayFormat = dayjs(bithday)
    const diferenceForYear = dateNow.diff(bithdayFormat, "year")
    const nextBithday = dayjs(bithdayFormat).add(diferenceForYear + 1, 'year')
    
    return console.log(`
        Você nasceu no dia ${bithdayFormat.format('DD/MM/YYYY')}
        A sua idade é ${diferenceForYear} anos
        e seu proximo aniversario é em ${nextBithday.format('DD/MM/YYYY')}
        faltando ${nextBithday.diff(dateNow, 'day') + 1} dias
        `)
} 

calculateDay('2005-03-06')