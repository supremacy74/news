export const formatDateToCustomString = (timestamp: number) => {
    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    const currentDate = new Date(timestamp)

    const dayOfWeek = daysOfWeek[currentDate.getDay()]
    const dayOfMonth = currentDate.getDate()
    const month = months[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    return `${dayOfWeek}, ${dayOfMonth}.${month}.${year}`
}
