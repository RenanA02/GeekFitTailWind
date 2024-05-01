import Exbox from "./Exbox"



const Exercicios = () => {
  return (
      <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/wGl4u05.png')] bg-cover bg-no-repeat bg-center">
        <Exbox titulo="qualquer titulo">
          <p>já</p>
        </Exbox>

        <div className="border-[3px] h-fit w-[90%] lg:w-[70%] mt-4 rounded-2xl bg-zinc-900/50 flex flex-col pb-2">

          <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-4xl flex items-center justify-center ">
            Inferiores
          </div>

          <div className="text-white text-2xl ml-2 mt-2 mb-[20%] md:text-4xl md:mb-[15%] md:ml-5 md:mt-5">
              <li>Coiso 1</li>
              <li>Coiso 2 </li>
              <li>Coiso 3</li>
          </div>

          <div className="flex items-end ">
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-3 text-white text-3xl "> 13 </span>
            <div className=" border-[1px] h-8 w-[80%] lg:w-[80%] rounded-3xl ml-2 bg-gradient-to-r from-[#00ffff] from-80% to-80%"></div>
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-2 mr-3 text-white text-3xl "> 14 </span>
          </div>
        </div>


        <div className="border-[3px] h-fit w-[90%] lg:w-[70%] mt-4 rounded-2xl bg-zinc-900/50 flex flex-col pb-2">

          <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-4xl flex items-center justify-center ">
            Superiores
          </div>

          <div className="text-white text-2xl ml-2 mt-2 mb-[20%] md:text-4xl md:mb-[15%] md:ml-5 md:mt-5">
              <li>Coiso 1</li>
              <li>Coiso 2 </li>
              <li>Coiso 3</li>
          </div>

          <div className="flex items-end ">
            <span className=" border-[1px] h-12 w-[20%] lg:w-10% rounded-xl flex items-center justify-center ml-3 text-white text-3xl "> 10 </span>
            <div className=" border-[1px] h-8 w-[60%] lg:w-[80%] rounded-3xl ml-2 bg-gradient-to-r from-[#00ffff] from-60% to-60%"></div>
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-2 mr-3 text-white text-3xl "> 11 </span>
          </div>
        </div>


        <div className="border-[3px] h-fit w-[90%] lg:w-[70%] mt-4 rounded-2xl bg-zinc-900/50 flex flex-col pb-2">

          <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-4xl flex items-center justify-center ">
            Costas
          </div>

          <div className="text-white text-2xl ml-2 mt-2 mb-[20%] md:text-4xl md:mb-[15%] md:ml-5 md:mt-5">
              <li>Coiso 1</li>
              <li>Coiso 2 </li>
              <li>Coiso 3</li>
          </div>

          <div className="flex items-end">
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-3 text-white text-3xl "> 15 </span>
            <div className=" border-[1px] h-8 w-[60%] lg:w-[80%] rounded-3xl ml-2 bg-gradient-to-r from-[#00ffff] from-30% to-30%"></div>
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-2 mr-3 text-white text-3xl "> 16 </span>
          </div>
        </div>

        <button className="border-[3px] mb-2 h-[8%] min-h-[8%] w-[90%] lg:w-[70%] mt-4 rounded-2xl text-white text-[2rem] md:text-[2rem] text-center"> Finalizar treino </button>

      </div>
  )
}

export default Exercicios;