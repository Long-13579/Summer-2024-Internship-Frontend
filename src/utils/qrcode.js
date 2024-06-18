import QRCode from 'qrcode'

const QR_CODE_ERROR_CORRECTION_LEVEL = 'H'
const QR_CODE_WIDTH = 250
const QR_CODE_MARGIN = 1

export const getQRCode = (ticketId) => {
  return QRCode.toDataURL(ticketId.toString(), {
    errorCorrectionLevel: QR_CODE_ERROR_CORRECTION_LEVEL,
    width: QR_CODE_WIDTH,
    margin: QR_CODE_MARGIN
  })
}
