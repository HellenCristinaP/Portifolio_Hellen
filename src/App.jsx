// Corpo do portifolio. Componente principal do portifolio
import { useEffect } from 'react';
import Block from './block'
import BlockC from './blockC'
import Projetos from './projetos'

function App() {
  // Dados do portifólio
  const name = "Hellen Cristina";
  const iam = "Estudante de Análise e Desenvolvimento de Sistemas";
  const objective = "Desenvolvedora Front-end";
  const colegy = "UNIMES"
  const subjects = "Análise e Desenvolvimento de Sistemas";
  const semestre = 4 + "º"

  function abrirMenu() {
    const nav = document.querySelector('#nav');

    nav.classList.toggle('hidden');

    // lembre-se que não é nav.classList == 'hidden', pois o classList é uma lista de classes, não uma string, então temos que colocar contains para verificar o estado da classe
  }

  useEffect(() => {
    fetch('https://api.github.com/users/HellenCristinaP')
      .then((res) => res.json())
      .then((data) => {
        const img = document.querySelector('#imgG');
        img.src = data.avatar_url;
        img.alt = `Foto de ${name}`;
      })
  }, []);
  return (
    <div className="mx-auto">
      <div className="fixed md:static">
        <div className="fixed right-0 m-3">
          <label>
            <div
              className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
            >
            <input className="hidden peer" type="checkbox" onClick={abrirMenu}/>
              <div
                className="w-[80%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.75rem] peer-checked:rotate-[-45deg]"
              ></div>
              <div
                className="w-[60%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
              ></div>
              <div
                className="w-[80%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.75rem] peer-checked:rotate-[45deg]"
                ></div>
            </div>
          </label>
          </div>

        <nav className="bg-purple-900 border-b-amber-400 size-svh p-7 hidden md:block md:justify-items-center md:border-b-2 border-amber-400 md:p-2 md:w-full md:h-fit md:bg-purple-800" id='nav'>
          <ul className="flex flex-col capitalize justify-between text-[#f1f1f1]/50 font-semibold text-2xl mx-2 gap-20
        md:flex-row md:size-fit md:gap-15">
            <li><a href="#home" className="hover:text-[#f1f1f1]">Home</a></li>
            <li><a href="#habilidades" className="hover:text-[#f1f1f1]">Habilidades</a></li>
            <li><a href="#projetos" className="hover:text-[#f1f1f1]">Projetos</a></li>
            <li><a href="#redessociais" className="hover:text-[#f1f1f1]">Redes Sociais</a></li>
          </ul>
        </nav>
      </div>
      <header className="bg-gradient-to-t to-65% to-purple-800 px-8 pt-25 lg:px-40" id='home'>
        <img src="" alt="Foto minha" className="block float-right rounded-full h-25 sm:h-30 lg:h-45 lg:mx-3" id='imgG' />
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{name}</h1>
        <h2>{objective}</h2>
        <br />
        <p>Olá, meu nome é {name}, sou {iam} e tenho desejo ser {objective}. <br />
          Trabalhei por mais de 1 ano com atendimento ao cliente e agora quero migrar a programação, amo a sensação de códigos virando uma página web. Tenho afinidade em front-end, mas pretendo ser Full Stack, então estou aberta a aprender.</p>
        <main className="m-2 p-5 border-2 border-white rounded-2xl">
          <h2>Formação Acadêmica</h2>
          <h3 className="text-2xl lg:text-3xl">{subjects}</h3>
          <p>Estou cursando {subjects}, na {colegy} - {semestre} semestre</p>
        </main>
        <br />
      </header>
      <main className="px-8 pt-15 lg:px-40">
        <h2 id='habilidades'>Habilidades</h2>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <li>HTML
            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>CSS
            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>JavaScript
            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>React

            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>Node.js
            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>GitHub
            <div className="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>
        </ul>
        <br />
        <p className="pb-5"><strong>Estou em busca de oportunidades</strong>, quer saber mais? Baixe meu curriculo.</p>
        <a href="./curriculo/Curriculo_Hellen_Estágio_FrontEnd.pdf" download="./curriculo/Curriculo_Hellen_Estágio_FrontEnd.pdf" className="cursor-pointer py-2.5 px-4 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold shadow-md">Baixar curriculo</a>

        <h2 className="py-5" id='projetos'>Projetos</h2>
        <article className="grid grid-cols-1 gap-3 px-5 pt-2 md:grid-cols-2">
          <Projetos nameproject={"SlideShow em JS"} link={"https://hellencristinap.github.io/slidesShow/"} linkRepo={"https://github.com/HellenCristinaP/slidesShow.github.io"} />

          <Projetos nameproject={"Impar ou par"} link={"https://hellencristinap.github.io/numeros/"} linkRepo={"https://github.com/HellenCristinaP/numeros"}
          />

          <Projetos nameproject={"Previsão do Tempo"} link={"https://previsao-do-tempo-8jrg.onrender.com"} linkRepo={"https://github.com/HellenCristinaP/previsao_do_tempo"}
          />

          <Projetos nameproject={"Verificar Lucro"} image="/public/Lucros.png" link={"https://hellencristinap.github.io/Lucro/"} linkRepo={"https://github.com/HellenCristinaP/Lucro"}
          />

          <Projetos nameproject={"Metabolismo Basal"} linkRepo={"https://github.com/HellenCristinaP/metabolismobasal"} descrition={"Projeto que estou contribuindo"} link={"https://adalbertobrant.github.io/metabolismobasal"} />

          <Projetos nameproject={"DIO Lab"} linkRepo={"https://github.com/HellenCristinaP/dio-lab-open-source/"} descrition={"Projeto onde aprendi a fazer README"} link={"https://digitalinnovationone.github.io/dio-lab-open-source"} />

        </article>
      </main>
      <footer className="text-center pt-5">
        <p className="text-sm font-light pt-3 mb-2" id='redessociais'>Minhas redes sociais</p>
        <a href="https://www.linkedin.com/in/hellen-cristina-araújo-da-silva"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/HellenCristinaP"><i className="fab fa-github"></i></a>
      </footer>
    </div>
  )
}

export default App
