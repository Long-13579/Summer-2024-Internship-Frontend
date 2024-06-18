export const setTicketInfoToLocalStorage = (ticketInfo) => {
  localStorage.setItem('ticketInfo', JSON.stringify(ticketInfo))
}

export const getTicketInfoFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('ticketInfo'))
}

export const removeTicketInfoFromLocalStorage = () => {
  localStorage.removeItem('ticketInfo')
}

export const setUserInfoToLocalStorage = (userInfo) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export const getUserInfoFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userInfo'))
}

export const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem('userInfo')
}
