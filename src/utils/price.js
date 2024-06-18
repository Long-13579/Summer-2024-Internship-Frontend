export const formatPrice = (price, decimalSeparator = '.', thousandSeparator = ',') => {
  let priceStr = price.toString()

  let [integerPart, decimalPart] = priceStr.split(decimalSeparator)

  let formattedInteger = ''
  let count = 0

  for (let i = integerPart.length - 1; i >= 0; i--) {
    count++
    formattedInteger = integerPart[i] + formattedInteger
    if (count % 3 === 0 && i !== 0) {
      formattedInteger = thousandSeparator + formattedInteger
    }
  }

  if (decimalPart) {
    return formattedInteger + decimalSeparator + decimalPart
  } else {
    return formattedInteger
  }
}
