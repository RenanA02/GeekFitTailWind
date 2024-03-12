import { useState } from 'react';
import Exercicios from './components/exercicios';
import Dieta from './components/dieta';
import Inicio from './components/inicio';
import Historico from './components/historico';
import Dicas from './components/dicas';
import Perfil from './components/perfil';
import { FaUser } from "react-icons/fa";

function App() {
  const [ margin, setMargin ] = useState({marginLeft: 0});

  const click = (value) => {
    setMargin({ marginLeft: value});
  }

  return (
    <div>
      <div className="fixed h-[10.1vh] w-screen bg-[#222] flex">
        <div className='container flex mx-auto'>
          <div className='mt-[1vh] ml-[1vh] h-[8vh] w-[8vh] border-4 border-[#d1d1d1]'>
          <button className='w-full h-full flex items-center justify-center' onClick={() => click(-500)}><FaUser className='text-white text-6xl' /></button>
          </div>
          <div className='box-border mt-[1vh] ml-[3vh] h-[8vh] w-[8vh] flex justify-center items-center border-4 border-[#d1d1d1] text-white text-[3.2em]'>99</div>
          <div className='box-border mt-[1vh] ml-[1vh] h-[8vh] w-[24vh] border-4 border-[#d1d1d1] bg-gradient-to-r from-[#d1d1d1] from-70% to-70%'></div>
        </div>
      </div>

      <div id="screen" style={{marginLeft: `${margin.marginLeft}vw`}} className={"w-[600vw] h-[90vh] flex transition-all " + margin}>
        <Dieta />
        <Exercicios />
        <Inicio />
        <Historico />
        <Dicas />
        <Perfil />

      </div>

      
      <div className="fixed h-[10.1vh] w-screen bottom-0 bg-[#222] flex">
        <div className="w-[20%] h-full bg-[url('https://i.imgur.com/agpPRAi.png')] active:scale-110 active:bg-[#555] duration-1000 bg-cover bg-no-repeat bg-center">
          <button className='w-full h-full' onClick={() => click(0)}></button>
        </div>
        <div className="w-[20%] h-full bg-[url('https://i.imgur.com/vFV5fVY.png')] bg-cover bg-no-repeat bg-center active:scale-110 active:bg-[#555] duration-1000">
          <button className='w-full h-full' onClick={() => click(-100)}></button>
        </div>
        <div className="w-[20%] h-full bg-[url('https://i.imgur.com/cuyVX3u.png')] bg-cover bg-no-repeat bg-center active:scale-110 active:bg-[#555] duration-1000">
          <button className='w-full h-full' onClick={() => click(-200)}></button>
        </div>
        <div className="w-[20%] h-full bg-[url('https://i.imgur.com/gPPnvMZ.png')] bg-cover bg-no-repeat bg-center active:scale-110 active:bg-[#555] duration-1000">
          <button className='w-full h-full' onClick={() => click(-300)}></button>
        </div>
        <div className="w-[20%] h-full bg-[url('https://i.imgur.com/zFTfn1k.png')] bg-cover bg-no-repeat bg-center active:scale-110 active:bg-[#555] duration-1000">
          <button className='w-full h-full' onClick={() => click(-400)}></button>
        </div>
      </div>
    </div>
  );
}
export default App;
