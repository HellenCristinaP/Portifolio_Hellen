function projetos({ nameproject, link, linkRepo, descrition}) {
  return (
    <div className="flex flex-col justify-between h-full border-1 border-purple-800 rounded-xl py-3 px-5">
      <div>
        <h3 className="text-2xl">{nameproject}</h3>
      </div>

      <p className="italic text-white/70">{descrition}</p>

      <div className="flex mt-4 justify-">
        <a href={link} className="cursor-pointer py-2 px-4.5 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold sm:py-2 sm:px-5 sm:ml-2">Site</a>
        <a href={linkRepo} className="cursor-pointer py-2 px-4.5 mx-2 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold sm:py-2 sm:px-5">Repositorio</a>
      </div>
    </div>

  )
}

export default projetos