function projetos({ nameproject, link, linkRepo, descrition }) {
  return (
    <div className="flex flex-col justify-between h-full border-1 border-purple-800 rounded-xl py-3 px-5">
      <div>
        <h3 className="text-2xl">{nameproject}</h3>
      </div>

      <p className="italic text-white/70">{descrition}</p>

      <div className="flex mt-3 justify-center">
        <a href={link} className="cursor-pointer py-2.5 px-6 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold sm:ml-2" aria-label={`Site do projeto ${nameproject}`}>Site</a>
        <a href={linkRepo} className="cursor-pointer py-2.5 px-5 mx-2 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold" aria-label={`Repositório do projeto ${nameproject}`}>Repositorio</a>
      </div>
    </div>

  )
}

export default projetos