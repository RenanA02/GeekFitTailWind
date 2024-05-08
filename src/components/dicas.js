export const Dicas = () => {
  return(
  <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex flex-col items-center bg-fixed bg-[url('https://i.imgur.com/duC0hQ1.png')] bg-cover bg-no-repeat bg-center">
    <img className="h-[20vh]" src="https://i.imgur.com/UzZM1w2.png" alt="strength"></img>
    <h1 className="text-white text-4xl mt-3 text-bold">Avisos</h1>
    <div className="w-[90%] h-[11vh] flex justify-center items-center mt-4 border-2 rounded-3xl px-2 py-2">
      <p className="text-white text-center text-lg">O app apenas sugere, use por sua conta em risco</p>
    </div>
    <div className="w-[90%] h-[11vh] flex justify-center items-center mt-4 border-2 rounded-3xl px-2 py-2">
      <p className="text-white text-center text-lg">Dietas com base genérica, procure um profissional</p>
    </div>
    <div className="w-[90%] h-[11vh] flex justify-center items-center mt-4 border-2 rounded-3xl px-2 py-2">
      <p className="text-white text-center text-lg">Apenas siga para o próximo quando estiver confortável com o exercício do dia atual
</p>
    </div>
    <div className="w-[90%] h-[11vh] flex justify-center items-center mt-4 border-2 rounded-3xl px-2 py-2">
      <p className="text-white text-center text-lg">Resultados podem variar por diversos fatores</p>
    </div>
  </div>
  )
}

