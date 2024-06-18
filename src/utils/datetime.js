import moment from 'moment'

export const formatDate = (dateString, template = 'DD/MM/YYYY') => {
  if (dateString) {
    return moment(dateString).format(template)
  }
  return null
}

export const getDayOfWeek = (dateString) => {
  if (dateString) {
    return moment(dateString, 'DD/MM/YYYY').format('dddd')
  }
  return null
}

export const isCurrentTimeGreaterThan = (givenDate, givenTime) => {
  if (givenDate && givenTime) {
    const currentTime = moment()
    const givenDateTimeString = `${givenDate} ${givenTime}`
    const givenMoment = moment(givenDateTimeString, 'YYYY-MM-DD HH:mm:ss')

    return currentTime.isAfter(givenMoment)
  }
  return null
}

export const getHourAndMinute = (time) => {
  if (time) {
    return moment(time, 'HH:mm:ss').format('HH:mm')
  }
  return null
}
