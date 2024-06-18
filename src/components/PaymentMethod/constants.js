import MomoLogo from '@/assets/images/img-momo.png'
import VNPayLogo from '@/assets/images/vnpay.webp'
import MasterCard from '@/assets/images/img-card.png'

export const PAYMENT_METHOD = [
  {
    id: 'MOMO',
    title: 'Pay with Momo',
    src: MomoLogo,
    active: false
  },
  {
    id: 'VN_PAY',
    title: 'Pay with VNPay',
    src: VNPayLogo,
    active: true
  },
  {
    id: 'MASTER_CARD',
    title: 'Pay via International Card',
    src: MasterCard,
    active: false
  }
]
