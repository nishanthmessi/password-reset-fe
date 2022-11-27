import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [resetCode, setResetCode] = useState('')
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleReset = async (e) => {
    e.preventDefault()

		await axios.post('/reset-password', {
			password: password,
			resetCode: resetCode,
			})
			.then(() => {
        setSuccess('Password Updated, Redirecting to Login....')
        setResetCode('')
        setPassword('')
        setTimeout(() => {
          setSuccess('')
          navigate('/')
        }, 3000)
      }) 
			.catch((error) => {
        setError(error.response.data.error);
        setTimeout(() => {
          setError('')
        }, 5000) 
      })  
	}

  return (
    <>
    <div className="flex flex-col items-center justify-center px-6 h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
      <h2 className="mb-1 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Reset Password
      </h2>
      <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleReset}>
        <div className="flex justify-center">
          {error && <span className="bg-red-700 text-white p-2 rounded-md text-center">{error}</span>}
          {success && <span className="bg-green-700 text-white p-2 rounded-md text-center">{success}</span>}
        </div>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900">Reset Code</label>
          <input 
            type="text"  
            placeholder="enter code"  
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}  
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900">New Password</label>
          <input 
            type="password"  
            placeholder="••••••••" 
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>    
          <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset password</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default ResetPassword