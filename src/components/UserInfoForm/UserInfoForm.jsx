import { schema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import { useDispatch } from 'react-redux'
import { setIsShowPopUp, setPopUpContent } from '@/redux/slices/ui'
import { CONFIRM_AGE_RATE, CONFIRM_TERMS } from './constants'
import Checkbox from '@/components/Checkbox'

export default function UserInfoForm() {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()

  const onSubmit = handleSubmit((data) => {
    // TODO: check API and forward to next step4
  })

  const handleSubmitForm = (event) => {
    event.preventDefault()
    if (Object.keys(errors).length > 0) {
      return
    }

    if (!watch('verifyAge')) {
      dispatch(setIsShowPopUp(true))
      dispatch(setPopUpContent(CONFIRM_AGE_RATE))
    } else if (!watch('agreeTerms')) {
      dispatch(setIsShowPopUp(true))
      dispatch(setPopUpContent(CONFIRM_TERMS))
    } else {
      onSubmit()
    }
  }

  return (
    <form>
      <TextInput
        name='name'
        register={register}
        type='text'
        labelName='Name'
        placeholder='Name (Last, First)'
        errorMessage={errors.name?.message}
      />
      <TextInput
        name='phoneNumber'
        register={register}
        type='tel'
        labelName='Phone number'
        placeholder='Phone number'
        errorMessage={errors.phoneNumber?.message}
      />
      <TextInput
        name='email'
        register={register}
        type='text'
        placeholder='Email'
        labelName='Email'
        errorMessage={errors.email?.message}
      />
      <div className='mb-2'>
        <label className='flex items-center gap-2 hover:cursor-pointer'>
          <Controller
            name='verifyAge'
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} className='h-[16px] w-[16px]' checked={field.value} />}
          />
          <span className='text-md font-light'>I verify I am the correct age for the movie</span>
        </label>
        <label className='mt-1 flex items-center gap-2 hover:cursor-pointer'>
          <Controller
            name='agreeTerms'
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} className='h-[16px] w-[16px]' checked={field.value} />}
          />
          <span className='text-md font-light'>Agree to Cinestar's terms.</span>
        </label>
      </div>
      <Button type='submit' title='Continue' extraClass='mt-6 w-full' handleSubmit={handleSubmitForm} />
    </form>
  )
}
