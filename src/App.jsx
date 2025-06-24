// Corpo do portifolio. Componente principal do portifolio
import { use, useEffect } from 'react';
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
  const nav = document.querySelector('#nav');

 

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
    <div class="mx-auto">
      <nav class="fixed top-0 w-full bg-purple-800 px-15 py-2 border-b-2 border-amber-400 shadow-md sm:hidden lg:px-50" id='nav'>
        <ul class="flex justify-between text-[#f1f1f1]/50 font-semibold">
          <li><a href="#home" class="hover:text-[#f1f1f1]">Home</a></li>
          <li><a href="#habilidades" class="hover:text-[#f1f1f1]">Habilidades</a></li>
          <li><a href="#projetos" class="hover:text-[#f1f1f1]">Projetos</a></li>
          <li><a href="#redessociais" class="hover:text-[#f1f1f1]">Redes Sociais</a></li>
        </ul>
      </nav>
      <header class="bg-gradient-to-t from to-65% to-purple-800 px-8 pt-15 lg:px-50" id='home'>
        <img src="" alt="Foto minha" class="block float-right rounded-full h-20 sm:h-30 lg:h-50 lg:mx-3" id='imgG'/>
        <h1 class="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{name}</h1>
        <h2>{objective}</h2>
        <br />
        <p>Olá, meu nome é {name}, sou {iam} e tenho desejo ser {objective}.
          <br />
          Trabalhei por mais de 1 ano com atendimento ao cliente e agora quero migrar a programação, amo a sensação de códigos virando uma página web. Tenho afinidade em front-end, mas pretendo ser Full Stack, então estou aberta a aprender.</p>
        <br />
        <h2>Formação Acadêmica</h2>
        <h3 class="text-2xl lg:text-3xl">{subjects}</h3>
        <p>Estou cursando {subjects}, na {colegy} no 3º semestre da faculdade.</p>
        <br />
      </header>
      <main class="px-8 pt-15 lg:px-50">
        <h2 id='habilidades'>Habilidades</h2>
        <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <li>HTML
            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>CSS
            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>JavaScript
            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>React

            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>Node.js
            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

          <li>GitHub
            <div class="flex gap-0.5">
              <BlockC /><Block /><Block />
            </div>
          </li>

        </ul>
        <br />
        <p class="pb-5"><strong>Estou em busca de oportunidades</strong>, quer saber mais? Baixe meu curriculo.</p>
        <a href="./curriculo/Curriculo_Hellen_Estágio_FrontEnd (1).pdf" download="./curriculo/Curriculo_Hellen_Estágio_FrontEnd (1).pdf" class="cursor-pointer py-1 px-4 mx-2 bg-purple-800 text-[#f1f1f1]/50 rounded-3xl hover:text-[#f1f1f1] hover:bg-purple-800/70 transition font-semibold shadow-md sm:py-2.5">Baixar curriculo</a>

        <h2 class="py-5" id='projetos'>Projetos</h2>
        <article class="grid grid-cols-2 gap-3 px-8 pt-3 lg:px-50">
          <Projetos nameproject={"SlideShow em JS"} link={"https://hellencristinap.github.io/slidesShow/"} linkRepo={"https://github.com/HellenCristinaP/slidesShow.github.io"} icon={"fa-solid fa-images"} />

          <Projetos nameproject={"Impar ou par"} link={"https://hellencristinap.github.io/numeros/"} linkRepo={"https://github.com/HellenCristinaP/numeros"}
            icon={"fab fa-js"}
          />

          <Projetos nameproject={"Previsão do Tempo"} link={"https://previsao-do-tempo-8jrg.onrender.com"} linkRepo={"https://github.com/HellenCristinaP/previsao_do_tempo"}
            icon={"fab fa-js"}
          />

          <Projetos nameproject={"Verificar Lucro"} image="/public/Lucros.png" link={"https://hellencristinap.github.io/Lucro/"} linkRepo={"https://github.com/HellenCristinaP/Lucro"}
            icon={"fab fa-js"}
          />
        </article>
      </main>
      <footer class="text-center pt-5">
        <p class="text-sm font-light pt-3 mb-2" id='redessociais'>Minhas redes sociais</p>
        <a href="https:www.linkedin.com/in/hellen-cristina-araújo-da-silva"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/HellenCristinaP"><i class="fab fa-github"></i></a>
      </footer>
    </div>
  )
}

export default App