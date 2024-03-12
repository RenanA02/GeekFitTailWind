import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";

const Inicio = () => {
  return(
  <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/aYnyfq9.png')] bg-cover bg-no-repeat bg-center">

    <div className="border-[3px] h-[30vh] w-[90%] mt-[5%] rounded-xl bg-slate-300/20">
      <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-4xl flex items-center">
        <MdOutlineSubdirectoryArrowLeft className="rotate-180 text-7xl ml-6 mr-3" />
        CONTINUAR
      </div>

      <div className="border-[3px] ml-[2.5%] mt-5 h-[25%] w-[95%] rounded-2xl flex items-center">
        <span className="border-[1px] rounded-full w-8 h-8 ml-[2.5%]"></span>
        <p className="text-4xl text-white ml-[15%]">INFERIORES</p>
      </div>
    </div>



    <div className="border-[3px] mt-7 h-[30vh] w-[90%] rounded-xl bg-slate-300/20">
      <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-3xl flex items-center">
        <GiWeightLiftingUp className=" text-6xl ml-6 mr-4" />
        RECOMENDADOS
      </div>

      <div className="border-[3px] ml-[2.5%] mt-5 h-[25%] w-[95%] rounded-2xl flex items-center">
        <span className="border-[1px] rounded-full w-8 h-8 ml-[2.5%]"></span>
        <p className="text-4xl text-white ml-[15%]">SUPERIORES</p>
      </div>
    </div>



    <div className="h-[16vh] mb-10 w-[90%] border-2 mt-7 border-white rounded-3xl flex bg-slate-300/20">
      <FaThumbsUp className="text-white text-8xl self-center w-2/5" />
      <div className="w-3/5 h-full flex flex-col items-center">
        <h1 className="text-white font-semibold text-3xl mt-2">Sequência</h1>
        <div className="border-2 border-white w-5/12 h-10 mt-3 rounded-full flex justify-center items-center text-2xl text-white"> 4 </div>
        <h1 className="text-white text-3xl mt-2">Dias</h1>
      </div>
    </div>

  </div>
  )
}

export default Inicio;