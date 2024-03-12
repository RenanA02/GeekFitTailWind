import { useState } from 'react';
import Exercicios from './components/exercicios';
import Dieta from './components/dieta';
import Inicio from './components/inicio';
import Historico from './components/historico';
import Dicas from './components/dicas';

function App() {
  const [ margin, setMargin ] = useState({marginLeft: 0});

  const click = (value) => {
    setMargin({ marginLeft: value});
  }

  return (
    <div>
      <div className="fixed h-[10.1vh] w-screen bg-[#222] flex">
        <div className='container flex mx-auto'>
          <div className='box-border mt-[1vh] ml-[1vh] h-[8vh] w-[8vh] border-4 border-[#d1d1d1] bg-[url(https://i.imgur.com/4KpFlSl.png)] bg-cover bg-no-repeat bg-center'></div>
          <div className='box-border mt-[1vh] ml-[3vh] h-[8vh] w-[8vh] flex justify-center items-center border-4 border-[#d1d1d1] text-white text-[3.2em]'>99</div>
          <div className='box-border mt-[1vh] ml-[1vh] h-[8vh] w-[24vh] border-4 border-[#d1d1d1] bg-gradient-to-r from-[#d1d1d1] from-70% to-70%'></div>
        </div>
      </div>

      <div id="screen" style={{marginLeft: `${margin.marginLeft}vw`}} className={"w-[500vw] h-[90vh] flex transition-all " + margin}>
        <Dieta />
        <Exercicios />
        <Inicio />
        <Historico />
        <Dicas />

      </div>

      
      <div className="fixed h-[10.1vh] w-screen bottom-0 bg-gray-600 flex">
        <div className="w-[20%] h-full bg-red-600">
          <button className='w-full h-full' onClick={() => click(0)}></button>
        </div>
        <div className="w-[20%] h-full bg-green-600">
          <button className='w-full h-full' onClick={() => click(-100)}></button>
        </div>
        <div className="w-[20%] h-full bg-blue-600">
          <button className='w-full h-full' onClick={() => click(-200)}></button>
        </div>
        <div className="w-[20%] h-full bg-pink-600">
          <button className='w-full h-full' onClick={() => click(-300)}></button>
        </div>
        <div className="w-[20%] h-full bg-gray-600">
          <button className='w-full h-full' onClick={() => click(-400)}></button>
        </div>
      </div>
    </div>
  );
}
export default App;
