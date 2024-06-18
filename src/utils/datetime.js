import moment from 'moment'

export const getDayOfWeek = (dateString) => {
  if (dateString) {
    const [day, month, year] = dateString.split('/').map(Number)

    const date = new Date(year, month - 1, day)

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return daysOfWeek[date.getDay()]
  } else {
    return null
  }
}

export const isCurrentTimeGreaterThan = (givenTime) => {
  if (givenTime) {
    const currentDate = new Date()

    const [givenHours, givenMinutes] = givenTime.split(':').map(Number)
    const givenDate = new Date()
    givenDate.setHours(givenHours, givenMinutes, 0, 0)

    return currentDate > givenDate
  } else {
    return null
  }
}

export const getHourAndMinute = (time) => {
  if (time) {
    const [hour, minute, _] = time.split(':')
    return `${hour}:${minute}`
  } else {
    return null
  }
}

export const formatDate = (dateString, template = 'DD/MM/YYYY') => {
  if (dateString) {
    return moment(dateString).format(template)
  } else {
    return null
  }
}
