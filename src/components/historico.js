import { FaThumbsUp } from "react-icons/fa";

const Historico = () => {
  return(
  <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/qEaWR5w.png')] bg-cover bg-no-repeat bg-center">
    <div className="h-[16vh] w-[90%] border-2 border-white rounded-3xl mt-2 flex">
      <FaThumbsUp className="text-white text-8xl self-center w-2/5" />
      <div className="w-3/5 h-full flex flex-col items-center">
        <h1 className="text-white font-semibold text-3xl mt-2">Sequência</h1>
        <div className="border-2 border-white w-5/12 h-10 mt-3 rounded-full flex justify-center items-center text-2xl text-white"> 4 </div>
        <h1 className="text-white text-3xl mt-2">Dias</h1>
      </div>
    </div>
    <div className="h-[20vh] min-h-[20vh] w-[90%] border-2 border-white rounded-3xl mt-4 flex bg-zinc-900/50">
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-[80%] h-2/3 border-2 border-white rounded-3xl flex items-center justify-center">
          <p className="text-white text-center text-4xl font-semibold">DIA<br />4</p>
        </div>
      </div>
      <div className="w-3/5 h-full outline-2 outline-white outline rounded-3xl">
        <p className="text-white mt-1 ml-3 text-xl">10 joelhos elevados</p>
        <p className="text-white mt-1 ml-3 text-xl">10 abdominais</p>
        <p className="text-white mt-1 ml-3 text-xl">10 flexões</p>
        <p className="text-white ml-3 text-xl">10 agachamentos</p>
      </div>
    </div>
    <div className="h-[20vh] min-h-[20vh] w-[90%] border-2 border-white rounded-3xl mt-4 flex bg-zinc-900/50">
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-[80%] h-2/3 border-2 border-white rounded-3xl flex items-center justify-center">
          <p className="text-white text-center text-4xl font-semibold">DIA<br />3</p>
        </div>
      </div>
      <div className="w-3/5 h-full outline-2 outline-white outline rounded-3xl">
        <p className="text-white mt-1 ml-3 text-xl">15 abdominais</p>
        <p className="text-white mt-1 ml-3 text-xl">25 flexões</p>
        <p className="text-white ml-3 text-xl">10 agachamentos</p>
      </div>
    </div>
    <div className="h-[20vh] min-h-[20vh] w-[90%] border-2 border-white rounded-3xl mt-4 flex bg-zinc-900/50">
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-[80%] h-2/3 border-2 border-white rounded-3xl flex items-center justify-center">
          <p className="text-white text-center text-4xl font-semibold">DIA<br />2</p>
        </div>
      </div>
      <div className="w-3/5 h-full outline-2 outline-white outline rounded-3xl">
        <p className="text-white mt-1 ml-3 text-xl">15 flexões</p>
        <p className="text-white ml-3 text-xl">15 agachamentos</p>
      </div>
    </div>
    <div className="h-[20vh] min-h-[20vh] w-[90%] border-2 border-white rounded-3xl mt-4 flex mb-2 bg-zinc-900/50">
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-[80%] h-2/3 border-2 border-white rounded-3xl flex items-center justify-center">
          <p className="text-white text-center text-4xl font-semibold">DIA<br />1</p>
        </div>
      </div>
      <div className="w-3/5 h-full outline-2 outline-white outline rounded-3xl">
        <p className="text-white mt-1 ml-3 text-xl">25 flexões</p>
        <p className="text-white ml-3 text-xl">20 agachamentos</p>
      </div>
    </div>
  </div>
  )
}

export default Historico;