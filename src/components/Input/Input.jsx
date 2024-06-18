export default function Input({
  className = 'mb-2',
  classNameLabel = 'text-sm font-medium',
  classNameInput = 'mt-2 w-full rounded-sm px-4 py-2 text-black-custom-700 outline-none',
  classNameError = 'mt-1 min-h-[16px] text-xs font-semibold text-red-400',
  name,
  register,
  rules,
  labelName,
  errorMessage,
  ...rest
}) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <div className={classNameLabel}>{labelName}</div>
      <input className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
