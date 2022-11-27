import { useState } from "react"
import axios from "axios"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

	const handleSubmit = async (e) => {
    e.preventDefault()

		await axios
			.post('/forgot-password', { email: email })
			.then(() => {
				setEmail('')
        setSuccess("Mail has been sent");
        setTimeout(() => {
          setSuccess('');
        }, 5000);
			})
			.catch((error) => 
      {
        setEmail('')
        setError(error.response.data.error)
        setTimeout(() => {
          setError('');
        }, 5000);
      })
	}
  
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
          <h2 className="mb-1 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Reset Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              {error && <span className="bg-red-700 text-white p-2 rounded-md text-center">{error}</span>}
              {success && <span className="bg-green-700 text-white p-2 rounded-md text-center">{success}</span>}
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-900">Your email</label>
              <input 
                type="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <h1 className="text-gray-600 font-bold">Reset code will be sent to this email</h1>
            <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Submit
            </button>
          </form> 
        </div>
      </div>
    </>
  )
}

export default ForgotPassword