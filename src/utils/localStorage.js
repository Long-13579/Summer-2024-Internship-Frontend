export const setTicketInfoToLocalStorage = (ticketInfo) => {
  localStorage.setItem('ticketInfo', JSON.stringify(ticketInfo))
}

export const getTicketInfoFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('ticketInfo'))
}

export const removeTicketInfoFromLocalStorage = () => {
  localStorage.removeItem('ticketInfo')
}
