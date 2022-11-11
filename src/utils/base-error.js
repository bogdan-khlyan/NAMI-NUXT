export function baseError(error, $toast, baseMessage = 'Что-то пошло не так...') {
  if (error?.response?.data?.error?.message) {
    $toast?.error(error.response.data.error.message)
  } else if (baseMessage) {
    $toast?.error(baseMessage)
    return baseMessage
  }
}
