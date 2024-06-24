import TagIcon from '@/assets/icon-tag.svg?react'
import ClockIcon from '@/assets/icon-clock.svg?react'
import SubtitleIcon from '@/assets/subtitle.svg?react'
import EarthIcon from '@/assets/earth.svg?react'

export const Icons = {
  TagIcon,
  ClockIcon,
  SubtitleIcon,
  EarthIcon: (props) => <EarthIcon {...props} fill='yellow' /> // Added fill="yellow" here
}
