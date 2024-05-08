import { Link } from "react-router-dom"

export const Perfil = () => {
    return (
      <div className="w-screen overflow-auto mt-[10vh] flex flex-col justify-center items-center bg-fixed bg-[url('https://i.imgur.com/c4MQ1MX.png')] bg-cover bg-no-repeat bg-center">
       <h1 className='text-white text-5xl mt-[-20vh]'>Bem-vindo!</h1>
       <button className=" mt-[10%] w-[28%] h-[10%] border-gray-800 border-4 rounded-2xl text-black bg-gray-200 focus:outline-none focus:shadow-outline"><Link to={'/login'}>Log-Off</Link></button>
    </div>
    )
}



