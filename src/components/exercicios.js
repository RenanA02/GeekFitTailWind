import Exbox from "./Exbox"
import Lista from "./Listas";
import ListaUsuarios from "./listaTodos";
import { useState } from "react";


export const Exercicios = ({props, passarDia}) => {
  const [estilosExbox, setEstilosExbox] = useState({
    inferiores: "from-80% to-40%",
    superiores: "from-20% to-20%",
    costas: "from-50% to-50%"
  });

  const [level, setLevel] = useState({
    infLevel: 15,
    supLevel: 12,
    costaLevel: 10,
  })



const handleFinalizar = () => {
  passarDia();
  setEstilosExbox({
    inferiores: "from-90% to-90%",
    superiores: "from-70% to-70%",
    costas: "from-0% to-0%"
  });
  if(estilosExbox.costas==="from-100% to 100%"){
    setEstilosExbox({
      inferiores: estilosExbox.inferiores,
      superiores: estilosExbox.superiores,
      costas: "from-0% to-0%"
  })
  setLevel({
    infLevel: 15,
    supLevel: 12,
    costaLevel: level.costaLevel+=1
  })
}
}


  return (
      <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/wGl4u05.png')] bg-cover bg-no-repeat bg-center">

        <Exbox titulo="Inferiores" lvlStart={level.infLevel} css={estilosExbox.inferiores}>
          <Lista text={<ListaUsuarios tipo='1' />}></Lista>
        </Exbox>
        <Exbox titulo="Superiores" lvlStart={level.supLevel} css={estilosExbox.superiores}>
          <Lista text={<ListaUsuarios tipo='2' />}></Lista>
        </Exbox>
        <Exbox titulo="Costas" lvlStart={level.costaLevel} css={estilosExbox.costas}>
          <Lista text={<ListaUsuarios tipo='3' />}></Lista>
        </Exbox>


        <button onClick={handleFinalizar} className="border-[3px] mb-3 h-[8%] min-h-[8%] w-[90%] lg:w-[70%] mt-4 rounded-2xl text-white text-[2rem] md:text-[2rem] text-center active:scale-110 active:bg-[#555] duration-1000"> Finalizar treino </button>


      </div>
  )
}
