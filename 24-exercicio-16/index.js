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
// const date1 = dayjs('2019-01-25')
// const date2 = dayjs('2018-06-05')
// console.log(date1.diff(date2, "day"))

// console.log(dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').format('{DD/MM/YYYY}'))

// console.log(dayjs().set('month', 3).month())

// console.log(dayjs.locale('es'))