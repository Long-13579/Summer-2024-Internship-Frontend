export default function SeatLegendItem({ icon: IconComponent, className, label }) {
  return (
    <div className='flex items-center gap-2'>
      <IconComponent className={className} />
      <span className='text-md font-medium'>{label}</span>
    </div>
  )
}
