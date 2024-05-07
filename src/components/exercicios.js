import Exbox from "./Exbox"
import Lista from "./Listas";



const Exercicios = () => {
  return (
      <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/wGl4u05.png')] bg-cover bg-no-repeat bg-center">

        <Exbox titulo="Inferiores" lvlStart="12" css="from-80% to-80%">
          <Lista text="Exercicio 1" id="checkbox1" />
          <Lista text="Exercicio 2" id="checkbox2"/>
          <Lista text="Exercicio 3" id="checkbox3"/>
        </Exbox>
        <Exbox titulo="Superiores" lvlStart="11" css="from-20% to-20%">
          <Lista text="Exercicio 4" id="checkbox4" />
          <Lista text="Exercicio 5" id="checkbox5" />
          <Lista text="Exercicio 6" id="checkbox6" />
        </Exbox>
        <Exbox titulo="Costas" lvlStart="15" css="from-50% to-50%">
          <Lista text="Exercicio 7" id="checkbox7" />
          <Lista text="Exercicio 8" id="checkbox8" />
          <Lista text="Exercicio 9" id="checkbox9" />
        </Exbox>


        <button className="border-[3px] mb-3 h-[8%] min-h-[8%] w-[90%] lg:w-[70%] mt-4 rounded-2xl text-white text-[2rem] md:text-[2rem] text-center"> Finalizar treino </button>


      </div>
  )
}

export default Exercicios;