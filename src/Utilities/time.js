import axios from 'axios'

const TIME_ZONE_DIFFERENCE = 3
const GLOBAL_TIME_API = "http://worldclockapi.com/api/json/utc/now"


const getTimeWithAmPm = (hr, minute) => {
    const period = (hr + TIME_ZONE_DIFFERENCE > 12) ? 'PM' : 'AM'
    let hour = (hr + TIME_ZONE_DIFFERENCE) % 12
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    return `${hour}:${minute} ${period}`
}

const getDayIndex = (day) => {
    const days = { mon: 0, tue: 1, wed: 2, thu: 3, fri: 4, sat: 5, sun: 6 }
    return days[day.slice(0, 3).toLowerCase()]
}

const getToday = (resultFunc, errorFunc) => {
    fetch(GLOBAL_TIME_API)
        .then(res => res.json()
        )
        .then(
            (result) => {
                const currentDateTime = result.currentDateTime
                const date = currentDateTime.slice(0, 10)
                const day = result.dayOfTheWeek
                resultFunc({
                    date, day
                })
            },

            (error) => {
                console.log('here2')
                errorFunc({})
            }
        )

}

export {
    getTimeWithAmPm,
    getToday
}