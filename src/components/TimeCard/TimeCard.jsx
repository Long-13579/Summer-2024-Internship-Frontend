import { cn } from '@/lib/utils'
import { getDayOfWeek, formatDate } from '@/utils/datetime'

export default function TimeCard({ isSelected, time, setSelectedDate }) {
  const handleChangeSelectedDate = () => {
    if (!isSelected) {
      setSelectedDate(time)
    }
  }
  return (
    <div
      className={cn(
        'flex w-[120px] max-w-[120px] flex-col items-center justify-center rounded-md border border-yellow-custom-700 py-4',
        {
          'cursor-default bg-yellow-custom-700 text-purple-custom-700': isSelected,
          'bg-transparent text-yellow-custom-700 hover:cursor-pointer': !isSelected
        }
      )}
      onClick={handleChangeSelectedDate}
    >
      <div className='text-lg font-bold'>{formatDate(time, 'DD/MM')}</div>
      <div className='text-sm capitalize'>{getDayOfWeek(formatDate(time))}</div>
    </div>
  )
}
