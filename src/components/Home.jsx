import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
		sessionStorage.removeItem('token')
    navigate('/')
	}

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className='text-5xl font-bold text-center'>Hurray!! You are successfully logged in</h1>
      <button className="mt-3 bg-orange-600 text-lg font-semibold text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-orange-700" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </>
  )
}

export default Home