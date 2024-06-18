import TicketInfo from '@/components/TicketInfo'
import UserInfoForm from '@/components/UserInfoForm'
import { Fragment, useEffect } from 'react'
import { CHECKOUT_STEPS } from './constants'
import { cn } from '@/lib/utils'
import PopUp from '@/components/PopUp'
import { useDispatch, useSelector } from 'react-redux'
import PaymentMethod from '@/components/PaymentMethod'
import { BOOK_TICKET_STEP } from '@/constants/bookTicket'
import UserInfoContainer from '@/components/UserInfoContainer'
import { setCheckoutStepId, setUserInfo } from '@/redux/slices/bookTicket'
import _ from 'lodash'
import { toast } from 'react-toastify'
import { setPaymentStatus } from '@/apis/ticket'
import { useParams } from 'react-router-dom'

export default function CheckoutPage() {
  const { isShowPopUp } = useSelector((state) => state.ui)
  const { checkoutStepId } = useSelector((state) => state.bookTicket)
  const dispatch = useDispatch()
  const { id: ticketId } = useParams()

  const getPaymentInformation = async (ticketId) => {
    try {
      const response = await setPaymentStatus(ticketId)
      if (response) {
        const { clientName: name, email, phone } = response
        dispatch(setUserInfo({ name, email, phone }))
        dispatch(setCheckoutStepId(BOOK_TICKET_STEP.SHOW_TICKET_INFO))
      }
    } catch (error) {
      toast.error(`Failed to get payment information: ${error}`)
    }
  }

  useEffect(() => {
    if (ticketId) {
      getPaymentInformation(ticketId)
    }
  }, [ticketId])

  return (
    <div className='mx-auto max-w-container px-container py-8 text-white-custom-700'>
      <h1 className='text-4xl font-bold uppercase'>Checkout</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <div className='my-5 flex flex-row items-center justify-between text-center tracking-tighter'>
            {CHECKOUT_STEPS.map((step, index) => {
              return (
                <Fragment key={step.id}>
                  {index > 0 && <div className='h-[3px] w-[36px] bg-white-custom-700'></div>}
                  <div
                    className={cn('flex flex-col items-center text-xl font-semibold uppercase', {
                      'text-yellow-custom-700': step.id <= checkoutStepId
                    })}
                  >
                    <div>{step.id}</div>
                    <div>{step.name}</div>
                  </div>
                </Fragment>
              )
            })}
          </div>
          {checkoutStepId === BOOK_TICKET_STEP.FILL_USER_INFO && <UserInfoForm />}
          {checkoutStepId === BOOK_TICKET_STEP.CHOOSE_PAYMENT_METHOD && <PaymentMethod />}
          {checkoutStepId === BOOK_TICKET_STEP.SHOW_TICKET_INFO && <UserInfoContainer />}
        </div>
        <TicketInfo />
      </div>
      {isShowPopUp && <PopUp />}
    </div>
  )
}
