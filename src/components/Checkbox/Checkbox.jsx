import { forwardRef } from 'react'

const Checkbox = forwardRef(({ checked, onChange, className, ...props }, ref) => {
  return <input type='checkbox' checked={checked} onChange={onChange} className={className} ref={ref} {...props} />
})

export default Checkbox
