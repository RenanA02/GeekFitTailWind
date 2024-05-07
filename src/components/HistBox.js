const HistBox = (props) => {
  return(
    <div className="h-[20vh] min-h-[20vh] w-[90%] border-2 border-white rounded-3xl mt-4 flex bg-zinc-900/50">
    <div className="w-2/5 h-full flex items-center justify-center">
      <div className="w-[80%] h-2/3 border-2 border-white rounded-3xl flex items-center justify-center">
        <p className="text-white text-center text-4xl font-semibold">DIA<br />{props.children}</p>
      </div>
    </div>
    <div className="w-3/5 h-full outline-2 outline-white outline rounded-3xl">
      <p className="text-white mt-1 ml-3 text-xl">10 joelhos elevados</p>
      <p className="text-white mt-1 ml-3 text-xl">10 abdominais</p>
      <p className="text-white mt-1 ml-3 text-xl">10 flexões</p>
      <p className="text-white ml-3 text-xl">10 agachamentos</p>
    </div>
  </div>
  )
}

export default HistBox;