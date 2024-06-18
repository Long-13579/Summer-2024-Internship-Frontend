import IconTag from '@/assets/images/ic-tag.svg?react'
import IconClock from '@/assets/images/ic-clock.svg?react'
import IconMessage from '@/assets/images/ic-message.svg?react'
import IconPersonCheck from '@/assets/images/ic-person-check.svg?react'
import { AGE_RATING } from '@/constants/movie'
import { formatDate } from '@/utils/datetime'

export const LINE_COUNT = 4

export const GENERAL_INFO = ({ category, duration, language = 'No subtitle', ageRate = AGE_RATING.U } = {}) => [
  { icon: IconTag, text: category },
  { icon: IconClock, text: `${duration}'` },
  { icon: IconMessage, text: `Subtitle: ${language}` },
  { icon: IconPersonCheck, text: AGE_RATING[ageRate] }
]

export const DESCRIPTION_INFO = ({ director, actor, dateStart, dateEnd }) => [
  { label: 'Director:', value: director },
  { label: 'Cast:', value: actor },
  { label: 'Release Date:', value: formatDate(dateStart) },
  { label: 'End Date:', value: formatDate(dateEnd) }
]
