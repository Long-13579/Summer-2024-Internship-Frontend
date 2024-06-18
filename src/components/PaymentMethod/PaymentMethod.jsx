import Button from '@/components/Button'
import { PAYMENT_METHOD } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from '@/lib/utils'
import { setCheckoutStepId, setSelectedPaymentMethod } from '@/redux/slices/bookTicket'
import { getTicketInfoFromLocalStorage, setUserInfoToLocalStorage } from '@/utils/localStorage'
import { BOOK_TICKET_STEP } from '@/constants/bookTicket'
import { path } from '@/routes/path'
import { createPayment } from '@/apis/ticket'
import { toast } from 'react-toastify'
import { getDifferenceInSeconds } from '@/utils/datetime'

export default function PaymentMethod() {
  const { selectedPaymentMethod, userInfo } = useSelector((state) => state.bookTicket)
  const dispatch = useDispatch()

  const handleChangePaymentMethod = (paymentMethodId) => {
    dispatch(setSelectedPaymentMethod(paymentMethodId))
  }

  const handleBack = (event) => {
    event.preventDefault()
    dispatch(setCheckoutStepId(BOOK_TICKET_STEP.FILL_USER_INFO))
  }

  const handleSubmitPayment = async () => {
    const ticketInfoFromLS = getTicketInfoFromLocalStorage()
    setUserInfoToLocalStorage(userInfo)
    const seatData = ticketInfoFromLS.seatList.map(({ colId, name }) => ({
      rowName: name[0],
      colId,
      name,
      status: true
    }))
    const ticketInfoBody = {
      userId: 1,
      showId: ticketInfoFromLS.showtime.id,
      seatData: JSON.stringify(seatData),
      voucherId: 1,
      clientName: userInfo.name,
      phone: userInfo.phoneNumber,
      email: userInfo.email,
      price: ticketInfoFromLS.totalPrice
    }
    const paymentInfoBody = {
      amount: ticketInfoFromLS.totalPrice,
      description: 'Book ticket',
      returnUrl: `${import.meta.env.VITE_WEB_URL}${path.checkout}`,
      remainTime: getDifferenceInSeconds(ticketInfoFromLS.expiredTime)
    }
    try {
      const response = await createPayment({ ticketInfo: ticketInfoBody, paymentInfo: paymentInfoBody })
      window.location.href = response.url
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div className='flex w-full flex-col gap-6'>
      {PAYMENT_METHOD.map((method) => (
        <div
          key={method.id}
          className={cn('text-md flex items-center gap-2 rounded-sm border p-5 font-semibold', {
            'border-gray-custom-400 bg-white-custom-700 text-black-custom-700 hover:cursor-default':
              method.id === selectedPaymentMethod,
            'border-gray-custom-400 bg-transparent text-white-custom-700 hover:cursor-pointer hover:bg-white-custom-700 hover:text-black-custom-700':
              method.id !== selectedPaymentMethod && method.active,
            'border-black-custom-700 bg-gray-custom-700 text-gray-custom-500 hover:cursor-default': !method.active
          })}
          onClick={() => handleChangePaymentMethod(method.id)}
        >
          <div className='flex h-[20px] min-w-[40px] max-w-[40px] items-center justify-center'>
            <img src={method.src} className='h-[20px]' />
          </div>
          <span>
            {method.title} {!method.active && '(Under maintenance)'}
          </span>
        </div>
      ))}
      <div className='mt-6 grid grid-cols-2 gap-2'>
        <Button title='Back' onClick={handleBack} />
        <Button
          title='Submit Payment'
          disabled={!selectedPaymentMethod}
          onClick={selectedPaymentMethod ? handleSubmitPayment : null}
        />
      </div>
    </div>
  )
}
