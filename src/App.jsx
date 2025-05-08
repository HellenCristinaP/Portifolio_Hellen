// Corpo do portifolio. Componente principal do portifolio
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
  let bgColor = "bg-white";

  return (
    <div class="border-[2px] border-purple-600 rounded-2xl w-100 mx-auto my-5 px-3 py-4 sm:w-130 lg:w-220 lg:px-5">
      <header class="py-2">
        <img src="../img/appiconG.png" alt="Foto minha" class="block float-right rounded-full h-20 sm:h-30 lg:h-50 lg:mx-3"/>
        <h1 class="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{name}</h1>
        <h2>{objective}</h2>
        <br />
        <p>Olá, meu nome é {name}, sou {iam} e tenho desejo de ser {objective}.</p>
        <p>Trabalhei por mais de 1 ano com atendimento ao cliente e agora quero migrar a programção, amo a sensação de códigos virando uma página web. Tenho afinidade em front-end, mas pretendo ser Full Stack, então estou aberta a aprender</p>
        <br />
        <h2>Formação Acadêmica</h2>
        <h3 class="text-2xl lg:text-3xl">{subjects}</h3>
        <p>Estou cursando {subjects}, na {colegy} no 3º semestre da faculdade.</p>
        <br />
        <h2>Habilidades</h2>
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
        <h2 class="pb-2">Projetos</h2>
        <article class="grid grid-cols-2 gap-3">
          <Projetos nameproject={"Alfabeto HTML"} link={"https://hellencristinap.github.io/Alfabeto-em-HTML/"} linkRepo={"https://hellencristinap.github.io/Alfabeto-em-HTML/"} icon={"fab fa-html5"}/>
          <Projetos nameproject={"Impar ou par"} link={"https://hellencristinap.github.io/numeros/"} linkRepo={"https://github.com/HellenCristinaP/numeros"} icon={"fab fa-js"}/>
        </article>
      </header>
    </div>
  )
}

export default App
