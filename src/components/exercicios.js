import Exbox from "./Exbox"



const Exercicios = () => {
  return (
      <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/wGl4u05.png')] bg-cover bg-no-repeat bg-center">

        <Exbox titulo="Inferiores">
        </Exbox>
        <Exbox titulo="Superiores">
        </Exbox>
        <Exbox titulo="Costas">
        </Exbox>


        <button className="border-[3px] mb-3 h-[8%] min-h-[8%] w-[90%] lg:w-[70%] mt-4 rounded-2xl text-white text-[2rem] md:text-[2rem] text-center"> Finalizar treino </button>

      </div>
  )
}

export default Exercicios;