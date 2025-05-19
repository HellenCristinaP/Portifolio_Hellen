function projetos({ nameproject, link, linkRepo, image, icon,}) {
  return (
    <div class="flex flex-col justify-between h-full border-1 border-purple-800 rounded-xl py-3 px-2">
      <div>
        <h3 class="mx-2 text-2xl">{nameproject}</h3>
        <img src={image} alt="imagem do projeto" />
        {/* <i class={icon}></i> */}
      </div>

      <div class="flex mt-4">
        <a href={link} class="cursor-pointer py-2 px-2.5 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold sm:py-2 sm:px-5 sm:ml-2">Site</a>
        <a href={linkRepo} class="cursor-pointer py-2 px-2.5 mx-2 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold sm:py-2 sm:px-5">Repositorio</a>
      </div>
    </div>

  )
}

export default projetos;