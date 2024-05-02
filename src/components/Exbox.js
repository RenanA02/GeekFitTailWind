const Exbox = (props) => {
  return(
    <div className="border-[3px] h-fit w-[90%] lg:w-[70%] mt-4 rounded-2xl bg-zinc-900/50 flex flex-col pb-2">

          <div className="outline outline-[3px] outline-white h-[25%] rounded-xl text-white text-4xl flex items-center justify-center ">
            {props.titulo}
          </div>

          <div className="text-white text-2xl ml-2 mt-2 mb-[20%] md:text-4xl md:mb-[15%] md:ml-5 md:mt-5">
          <ul class="shadow-xl">
      <li class="relative flex w-[95%] items-center justify-center gap-2.5 border-b-2 px-3 py-3.5 hover:border-gray-400">
        <input type="checkbox" id="checkbox1" class="peer relative h-5 w-5 shrink-0 appearance-none" />
        <label for="checkbox1" class="w-full  cursor-pointer font-medium text-white peer-checked:text-gray-400 peer-checked:line-through"> Exercicio 1 </label>
      </li>
      <li class="relative flex w-[95%] items-center justify-center gap-2.5 border-b-2 px-3 py-3.5 hover:border-gray-400">
        <input type="checkbox" id="checkbox2" class="peer relative h-5 w-5 shrink-0 appearance-none" />
        <label for="checkbox2" class="w-full cursor-pointer font-medium text-white peer-checked:text-gray-400 peer-checked:line-through"> Exercicio 2 </label>
      </li>
      <li class="relative flex w-[95%] items-center justify-center gap-2.5 border-b-2 px-3 py-3.5 hover:border-gray-400">
        <input type="checkbox" id="checkbox3" class="peer relative h-5 w-5 shrink-0 appearance-none" />
        <label for="checkbox3" class="w-full cursor-pointer font-medium text-white peer-checked:text-gray-400 peer-checked:line-through"> Exercicio 3 </label>
      </li>
      </ul>
          </div>

          <div className="flex items-end ">
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-3 text-white text-3xl "> 13 </span>
            <div className=" border-[1px] h-8 w-[80%] lg:w-[80%] rounded-3xl ml-2 bg-gradient-to-r from-[#00ffff] from-80% to-80%"></div>
            <span className=" border-[1px] h-12 w-[20%] lg:w-[10%] rounded-xl flex items-center justify-center ml-2 mr-3 text-white text-3xl "> 14 </span>
          </div>
        </div>
  )
}



export default Exbox;