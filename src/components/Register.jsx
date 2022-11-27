import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [disabled, setDisabled] = useState(true)

  const navigate = useNavigate()

  useEffect(() =>  {
    if(username && email && password) {
      setDisabled(false)
    } else {
			setDisabled(true)
		}
  }, [username, email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      username: username,
      email: email,
      password: password, 
    }

    await axios.post('/register', user).then((res) => {
      navigate('/home')
    })
    .catch((err) => {
      console.log(err.res.data);
    })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
        <div className="w-full relative">
          <div className="mt-6">
            <div className="mb-5 pb-1 text-4xl text-center font-bold text-gray-700">
              Hello <span className="text-orange-600">There!</span>
            </div>
            <div className="text-xl text-center font-semibold text-gray-700">
              Register your account!
            </div>         
            <form className="mt-8 max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div className="mx-auto max-w-lg">
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Username</span>
                  <input 
                    placeholder="your username" 
                    type="text"
                    className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-orange-600 focus:outline-none"
                    value={username}
							      onChange={(e) => setUsername(e.target.value)}
							      required
                  />
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Email</span>
                  <input 
                    placeholder="your email" 
                    type="email"
                    className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-orange-600 focus:outline-none"
                    value={email}
							      onChange={(e) => setEmail(e.target.value)}
							      required
                  />
                </div>
                <div className="py-2">
                  <span className="px-1 text-sm text-gray-600">Password</span>
                  <div className="relative">
                    <input 
                      type='password' 
                      placeholder="your password" 
                      className="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-orange-600 focus:outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      />
                  </div>
                </div>
                <div className="flex flex-col text-center">  
                  <label className="block text-gray-500 font-bold my-4 tracking-tighter">
                    Already have an account?
                    <button className="cursor-pointer tracking-tighter"> 
                      <Link to='/' className='ml-1 text-orange-600 border-b-2 hover:border-gray-400'>
                         Sign in
                      </Link>
                    </button>
                  </label>
                </div> 
                <button type='submit' className="mt-3 bg-orange-600 text-lg font-semibold w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-orange-700" disabled={disabled}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Register