import TicketInfo from '@/components/TicketInfo'
import UserInfoForm from '@/components/UserInfoForm'
import { Fragment, useState } from 'react'
import { CHECKOUT_STEPS } from './constants'
import { cn } from '@/lib/utils'
import PopUp from '@/components/PopUp'
import { useSelector } from 'react-redux'

export default function CheckoutPage() {
  const [stepId, setStepId] = useState(CHECKOUT_STEPS[0].id)
  const { isShowPopUp } = useSelector((state) => state.ui)
  return (
    <div className='mx-auto max-w-container px-container py-8 text-white-custom-700'>
      <h1 className='text-4xl font-bold uppercase'>Checkout</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <div className='my-5 flex flex-row items-center tracking-tighter'>
            {CHECKOUT_STEPS.map((step, index) => {
              return (
                <Fragment key={step.id}>
                  {index > 0 && <div className='h-[3px] w-[36px] bg-white-custom-700'></div>}
                  <div
                    className={cn('flex flex-col items-center text-xl font-semibold uppercase', {
                      'text-yellow-custom-700': step.id <= stepId
                    })}
                  >
                    <div>{step.id}</div>
                    <div>{step.name}</div>
                  </div>
                </Fragment>
              )
            })}
          </div>
          <UserInfoForm />
        </div>
        <TicketInfo />
      </div>
      {isShowPopUp && <PopUp />}
    </div>
  )
}
