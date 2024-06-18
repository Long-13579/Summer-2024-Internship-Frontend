import * as yup from 'yup'

const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const REGEX_PHONE_NUMBER = /^0[35789][0-9]{8}$/g

export const getRules = () => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: REGEX_EMAIL,
      message: 'Invalid email'
    }
  },
  name: {
    required: {
      value: true,
      message: 'Name is required'
    }
  },
  phoneNumber: {
    required: {
      value: true,
      message: 'Phone number is required'
    },
    pattern: {
      value: REGEX_PHONE_NUMBER,
      message: 'Invalid phone number'
    }
  }
})

export const schema = yup.object({
  email: yup.string().required('Email is required').matches(REGEX_EMAIL, 'Invalid email'),
  name: yup.string().required('Name is required'),
  phoneNumber: yup.string().required('Phone number is required').matches(REGEX_PHONE_NUMBER, 'Invalid phone number')
})
