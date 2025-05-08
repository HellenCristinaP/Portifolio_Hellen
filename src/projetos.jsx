function projetos({nameproject, image, link, linkRepo, icon}){
    return (
    <div class="border-1 border-purple-800 rounded-sm p-2">
        <h3 class="mx-2 text-2xl">{nameproject}</h3>
        <i class={icon}></i>
        <br />
        <a href={link}><button class="my-1 border-2 border-purple-900 rounded-sm px-5 bg-purple-900 hover:bg-[#08020C] transition duration-300 cursor-pointer active:bg-purple-900 lg:px-2">Site</button></a>
        <a href={linkRepo}><button class="border-2 border-purple-900 rounded-sm px-5 my-1 bg-purple-900 hover:bg-[#08020C] transition duration-300 cursor-pointer active:bg-purple-900 lg:px-2 mx-4">Repositorio</button></a>
    </div>
    )
}

export default projetos;