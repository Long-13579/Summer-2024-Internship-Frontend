import { customFetch, showError } from '@/utils/http'
import { CREATE_PAYMENT, SET_PAYMENT_STATUS } from './constant'

export const createPayment = async (body) => {
  return await customFetch
    .post(CREATE_PAYMENT, {
      signalKey: 'createPayment',
      body
    })
    .catch(showError)
}

export const setPaymentStatus = async (ticketId) => {
  return await customFetch
    .put(`${SET_PAYMENT_STATUS}/${ticketId}`, {
      signalKey: 'setPaymentStatus'
    })
    .catch(showError)
}
