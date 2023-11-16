import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    console.log('clicked')
    e.preventDefault()
    navigate('/testpage')
  }
  return (
    <div  className='w-full flex h-screen justify-between items-center'>
      <img src="/assets/books.jpg" alt="" className="object-cover hidden md:flex w-1/2 h-full" />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
        <form onSubmit={(e) => handleSubmit (e)} className="w-3/4 mx-auto flex h-fit justify-center items-center p-3 flex-col" action="">
      <h1 className="text-5xl font-bold">Log in</h1>
      <p className="font-light mt-2 text-gray-400">
        Enter your details to proceed
      </p>
      <div className='flex flex-col gap-2  mt-[3rem] w-full'>
        <label className="capitalize text-gray-500 text-sm" htmlFor="userId">ENTER YOUR STUDENT iD</label>
        <div className="flex relative w-full h-fit">
          <input type="text" placeholder='Student Id' className="w-full  border outline-none rounded-md border-gray-300 p-2 h-full" />
          <AiOutlineUser className='text-lg absolute top-1/2 transform -translate-y-1/2 right-3'/>
        </div>
      </div>
      <div className='flex  mt-[1rem] flex-col gap-2 w-full'>
        <label className="capitalize text-gray-500 text-sm" htmlFor="userId">ENTER YOUR PASSWORD</label>
        <div className="flex relative w-full h-fit">
          <input type="password" placeholder='Student Id' className="w-full  border outline-none rounded-md border-gray-300 p-2 h-full" />
          <AiOutlineLock className='text-lg absolute top-1/2 transform -translate-y-1/2 right-3'/>
        </div>
      </div>
      <button type='submit' className=' bg-primary w-full py-[.8rem] hover:bg-primary/70 transition duration-100 ease-in-out mt-[1rem] rounded-md text-white font-bold '>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login