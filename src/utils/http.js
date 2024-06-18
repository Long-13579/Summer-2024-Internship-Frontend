import * as httpConstants from '@/constants/httpConstants'
import { toast } from 'react-toastify'

const ABORT_REQUEST_CONTROLLERS = new Map()

export const request =
  (method) =>
  async (url, { query, body = {}, headers, signalKey, _csrf = '', ...rest } = {}) => {
    const addCSRFToken = httpConstants.METHODS_WITH_CSRF_TOKEN.includes(method)
    const addBody = httpConstants.METHODS_WITH_BODY.includes(method)

    try {
      const response = await fetch(getUrlPathWithQuery({ url, query }), {
        method,
        mode: httpConstants.CORS_MODE,
        headers: {
          'Content-Type': httpConstants.CONTENT_TYPE_JSON,
          ...(addCSRFToken && { [httpConstants.CSRF_HEADER]: _csrf }),
          ...headers
        },
        credentials: httpConstants.SAME_ORIGIN,
        ...(signalKey && { signal: abortAndGetSignalSafe(signalKey) }),
        ...(addBody && { body: JSON.stringify(body) }),
        ...rest
      })

      return handleResponse(response)
    } catch (error) {
      return handleError(error)
    }
  }

export const customFetch = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
}

export const getUrlPathWithQuery = ({ url: partialUrl, query = {} } = {}) => {
  const url = new URL(partialUrl, httpConstants.BASE_URL)
  const searchParams = new URLSearchParams({
    ...Object.fromEntries(url.searchParams),
    ...query
  })
  return `${url.href}${searchParams.size > 0 ? '?' : ''}${searchParams}`
}

const handleResponse = async (response) => {
  if (response.ok) {
    return response.json()
  } else {
    const errorText = await response.text()
    const errorData = errorText ? JSON.parse(errorText) : {}
    return Promise.reject(errorData)
  }
}

const abortRequestSafe = (key, reason = httpConstants.ABORT_ERROR_NAME) => {
  ABORT_REQUEST_CONTROLLERS.get(key)?.abort?.(reason)
}

const abortAndGetSignalSafe = (key) => {
  abortRequestSafe(key)
  const newController = new AbortController()
  ABORT_REQUEST_CONTROLLERS.set(key, newController)
  return newController.signal
}

const handleError = (error) => {
  const isAbortError = error === httpConstants.ABORT_ERROR_NAME

  return Promise.reject(
    isAbortError
      ? {
          status: httpConstants.ABORT_ERROR_STATUS,
          message: httpConstants.ABORT_ERROR_MESSAGE
        }
      : error
  )
}

export const showError = (error) => {
  if (!isAbortError(error)) {
    toast.error(error.message)
  }
}

export const isAbortError = (error) => {
  return error.status === httpConstants.ABORT_ERROR_STATUS
}
