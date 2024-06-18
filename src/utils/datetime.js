import moment from 'moment'

export const formatDate = (dateString, template = 'DD/MM/YYYY') => {
  if (dateString) {
    return moment(dateString).format(template)
  }
  return null
}
