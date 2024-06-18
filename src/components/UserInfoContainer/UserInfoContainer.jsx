import { useSelector } from 'react-redux'
import Button from '@/components/Button'
import { path } from '@/routes/path'
import { USER_INFO } from './constants'
import _ from 'lodash'
import { getQRCode } from '@/utils/qrcode'
import { useEffect, useState } from 'react'

export default function UserInfoContainer({ ticketId }) {
  const { userInfo } = useSelector((state) => state.bookTicket)
  const [qrCodeUrl, setQrCodeUrl] = useState(null)

  const handleGoBackHome = () => {
    window.location.href = `${import.meta.env.VITE_WEB_URL}${path.home}`
  }

  const fetchQRCode = async (ticketId) => {
    if (ticketId) {
      try {
        console.log('abc')
        const response = await getQRCode(ticketId)
        setQrCodeUrl(response)
      } catch (error) {
        console.error('Error in fetching QR code:', error)
      }
    }
  }

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a')
      link.href = qrCodeUrl
      link.download = qrCodeUrl
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  useEffect(() => {
    fetchQRCode(ticketId)
  }, [ticketId])

  if (!_.isEmpty(userInfo)) {
    return (
      <>
        <div className='flex w-full flex-col gap-4 rounded-lg bg-gradient-to-tl from-blue-custom-700 to-purple-custom-700 p-8 text-white-custom-700'>
          <h1 className='w-full text-center text-3xl font-bold uppercase'>Ticket information</h1>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-grow flex-col gap-4'>
              {USER_INFO(userInfo).map(({ label, value }) => (
                <div className='flex flex-col gap-1' key={label}>
                  <div className='text-sm font-medium text-yellow-custom-700'>{label}</div>
                  <div className='text-lg font-semibold'>{value}</div>
                </div>
              ))}
            </div>
            <div className='flex min-w-36 flex-col items-center justify-center'>
              {qrCodeUrl && <img src={qrCodeUrl} alt='qr-code' className='h-36 w-36' />}
              <Button
                title='Download QR'
                extraClass='mt-2 w-36 px-3 py-2'
                txtClass='text-sm'
                onClick={downloadQRCode}
              />
            </div>
          </div>
        </div>
        <Button title='Go back to homepage' extraClass='mt-4' onClick={handleGoBackHome} />
      </>
    )
  }
}
