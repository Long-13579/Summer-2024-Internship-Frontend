import IconTag from '@/assets/images/ic-tag.svg?react'
import IconClock from '@/assets/images/ic-clock.svg?react'
import IconMessage from '@/assets/images/ic-message.svg?react'
import IconPersonCheck from '@/assets/images/ic-person-check.svg?react'
import { AGE_RATING } from '@/constants/movie'

export const MOVIE_INFO = ({ category, duration, subtitle = false, language = null, ageRate = 'U' }) => [
  {
    icon: IconTag,
    text: category
  },
  {
    icon: IconClock,
    text: `${duration}'`
  },
  {
    icon: IconMessage,
    text: subtitle && language ? language : 'No subtitle'
  },
  {
    icon: IconPersonCheck,
    text: AGE_RATING[ageRate]
  }
]
