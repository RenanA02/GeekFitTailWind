
export const Dieta = () => {
  return (
    <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex items-center flex-col bg-fixed bg-[url('https://i.imgur.com/xTE7W0R.png')] bg-cover bg-no-repeat bg-center">
    <div className="mt-1 h-[30%] w-screen border-b-2 flex flex-col items-center">
      <h2 className='text-white text-[2em] mt-1'>DIETA</h2>
      <h1 className="text-white text-[4em] mt-1"> SEMANA 1</h1>
    </div>

    <div className="text-white flex flex-col items-center text-center">

      <p className="mt-4 mb-4 text-[1.2em] px-6">Nossa equipe separou algumas dicas de rotinas de Dieta que você pode fazer para seus treino.</p>

      <h1 className="text-3xl font-semibold">ÁGUA</h1>
      <p className="mt-1 mb-4 px-6">Antes, durante e depois do treino. A hidratação é de extrema importancia para manter seu corpo sempre saudavel</p>

      <h1 className="text-3xl font-semibold">PRÉ-TREINO</h1>
      <p className="mt-1 mb-4 px-6">Antes do treino é bom procurar a ingestão de alimentos que te forneçam mais energia, como carboidratos (cereais, tubérculos e raízes).</p>


      <h1 className="text-3xl font-semibold">PÓS-TREINO</h1>
      <p className="mt-1 mb-4 px-6">Depois de seu treino, busque consumir alimentos ricos em proteina, ja que é nesse momento que seus musculos começam a se reconstruir. Alguns exemplos de alimentos que podem ser consumidos são: Ovos, leite e derivados, carne, aves, peixe, quinoa e soja.</p>

      <div className="bg-red-900/75 flex flex-col items-center text-center mt-3" >
      <h1 className="text-4xl font-semibold">⚠ ATENÇÃO ⚠</h1>
      <p className="mt-1 px-6"> A porção de cada alimento é variavel depedendo da necessidade de cada individuo. É bom sempre lembrar que uma visita a profissionais especializados (nutricionistas, endocrinologistas e nutrólogos) pode se mostrar mais eficas para as suas necesidades nutricionais.</p></div>
    </div>
  </div>
  )
}

