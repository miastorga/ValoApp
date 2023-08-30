type Props = {
  status: number
}
const ERRORS_MESSAGES = {
  missingQuery: 'There is a field missing.',
  serverError: 'There was a server error, please try again later.',
  entityNotFound: "Account was not found or doesn't exist.",
  apiDown: 'Server is down'
} as const

export const Error = ({ status }: Props) => {
  let errorMessage = ''
  switch (status) {
    case 400:
      errorMessage = ERRORS_MESSAGES.missingQuery
      break;
    case 404:
      errorMessage = ERRORS_MESSAGES.entityNotFound
      break;
    case 429:
      errorMessage = ERRORS_MESSAGES.serverError
      break;
    default:
      errorMessage = ERRORS_MESSAGES.apiDown
      break;
  }
  return (
    <div className='text-center mb-7 rounded-box flex justify-center items-center'>
      <div className='flex justify-center items-center border-newRed border-2 px-10 py-2 rounded-box'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div>{errorMessage}</div>
      </div>
    </div>
  )
}
