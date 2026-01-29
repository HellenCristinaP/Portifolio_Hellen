// import React
import { useEffect } from 'react';
// import components
import Projetos from './components/projetos.jsx'
import Propriedades from './components/prioridades.jsx';
import Menu from './components/menu.jsx';
// import images
import html from '../public/html-5.png';
import css from '../public/css-3.png';
import js from '../public/javascript.png';
import tailwind from '../public/tailwind-css.png';
import sass from '../public/sass.png';
import bootstrap from '../public/bootstrap.png';
import react from '../public/react.png';

function App() {
  // Dados do portifólio
  const name = "Hellen Cristina"
  const formacoes = [
    {
      lugarDaFormacao: "UNIMES",
      curso: "Análise e Desenvolvimento de Sistemas",
      data: "01/2024 - 07/2026"
    },
    {
      lugarDaFormacao: "EBAC",
      curso: "Engenheiro Front-end",
      data: "01/2026 - 01/2027"
    }
  ];

  const hardSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Sass",
    "Bootstrap",
    "Git",
    "GitHub",
    "API",
    "Técnicas de SEO",
    "Técnicas de Acessibilidade"
  ];

  const softSkills = [
    "Comunicação",
    "Trabalho em equipe",
    "Resolução de problemas",
    "Empatia",
    "Organização"
  ];

  return (
    <div className="mx-auto">
      <div className="fixed w-full z-10">
        <Menu />
      </div>
      <header className="bg-radial-[circle_at_100%] from-white to-violet-950 to-55% md:h-[50vh] py-25 px-5 md:px-20 md:py-20" id='home'>
        <img src="https://avatars.githubusercontent.com/u/76890061?v=4" alt="Foto minha | uma garota branca que usa óculos e tem com cabelos longos e pretos" className="block float-right rounded-full h-35 sm:h-30 lg:h-45" />

        <h1 className="text-white text-5xl font-extrabold ">{name}</h1>
        <h2 className="text-3xl mt-1 mb-2 font-bold">Desenvolvedora Front-end</h2>
        <p className="font-semibold">Olá, meu nome é Hellen Cristina, sou Estudante de Análise e Desenvolvimento de Sistemas e estou estudando na EBAC. <br />
          Amo ver meu código se transformar em um site moderno
        </p>
      </header>
      <main>
        <section className="mx-3 my-5 p-5 border-2 border-violet-950 rounded-2xl">
          <h2>Formação Acadêmica</h2>
          {formacoes.map((formacao) =>
          (<section className="formacao">
            <h3 className="lugarDaFormacao">{formacao.lugarDaFormacao}</h3>
            <p className="curso">{formacao.curso} - {formacao.data}</p>
          </section>))}
        </section>
        <Propriedades />
      </main>
      <main className="px-8 pt-15 lg:px-40">
        <h2 id='habilidades'>Habilidades</h2>
        <ul className="flex flex-wrap justify-center gap-5 py-5">
          <li><img src={html} alt="HTML" /></li>
          <li><img src={css} alt="CSS" /></li>
          <li><img src={js} alt="JavaScript" /></li>
          <li><img src={tailwind} alt="TailwindCSS" /></li>
          <li><img src={sass} alt="Sass" /></li>
          <li><img src={bootstrap} alt="Bootstrap" /></li>
          <li><img src={react} alt="React" /></li>
        </ul>

        <h2 className="py-5" id='projetos'>Projetos</h2>
        <article className="grid grid-cols-1 gap-2 px-2 md:grid-cols-3">
          <Projetos nameproject={"IMC"} linkRepo={"https://github.com/HellenCristinaP/IMC"} descrition={"Projeto de verificar IMC, trabalhado por mim, com a EBAC"} link={"https://adalbertobrant.github.io/metabolismobasal"} />

          <Projetos nameproject={"Previsão do Tempo"} link={"https://previsao-do-tempo-8jrg.onrender.com"} linkRepo={"https://github.com/HellenCristinaP/previsao_do_tempo"} descrition={"Um  site de previsão do tempo utilizando a API OpenWeather."} />

          <Projetos nameproject={"Lista de tarefas"} linkRepo={"https://github.com/HellenCristinaP/Todolist/tree/main"} descrition={"Projeto onde aprendi a manipular e criar elementos dinâmicos com JavaScript. Além de ser meu primeiro projeto que hospedei no Vercel."} link={"https://todolist-blush-nu.vercel.app/"} />

          <Projetos nameproject={"Verificar Lucro"} image="/public/Lucros.png" link={"https://hellencristinap.github.io/Lucro/"} linkRepo={"https://github.com/HellenCristinaP/Lucro"} descrition={"Um site para verificar lucros utilizando JavaScript."} />

          <Projetos nameproject={"SlideShow em JavaScript"} link={"https://hellencristinap.github.io/slidesShow/"} linkRepo={"https://github.com/HellenCristinaP/slidesShow.github.io"} descrition={"Um projeto de apresentação de slides simples em JavaScript."} />


          <Projetos nameproject={"DIO Lab"} linkRepo={"https://github.com/HellenCristinaP/dio-lab-open-source/"} descrition={"Projeto onde aprendi a fazer README"} link={"https://digitalinnovationone.github.io/dio-lab-open-source"} />
        </article>
      </main>
      <footer className="text-center pt-3">
        <p className="text-sm font-light pt-3 mb-2" id='redessociais'>Minhas redes sociais</p>
        <a href="https://www.linkedin.com/in/hellen-cristina-araújo-da-silva" aria-label='link para meu perfil no Linkedin'>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/HellenCristinaP" aria-label='link para meu perfil no Github'>
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  )
}

export default App