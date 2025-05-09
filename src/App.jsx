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
      </header>
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
        <p class="pb-3">Estou atrás de oportunidades, quer saber mais? Baixe meu curriculo.</p>
        <a href="./Currículo/Curriculo_Hellen.Cristina.pdf" download="Currículo.pdf" class="border-2 border-purple-900 rounded-sm px-2 py-0.5 bg-purple-900 hover:bg-[#08020C] transition duration-300 cursor-pointer active:bg-purple-900 sm:mx-2 lg:px-2">Baixar Curriculo</a>
        <h2 class="py-2">Projetos</h2>
        <article class="grid grid-cols-2 gap-3">
          <Projetos nameproject={"Alfabeto HTML"} link={"https://hellencristinap.github.io/Alfabeto/"} linkRepo={"https://github.com/HellenCristinaP/Alfabeto"} icon={"fab fa-html5"}/>

          <Projetos nameproject={"Impar ou par"} image="../img/imparoupar.png" link={"https://hellencristinap.github.io/numeros/"} linkRepo={"https://github.com/HellenCristinaP/numeros"} icon={"fab fa-js"}/>
        </article>
        <footer class="text-center pt-5">
          <p class="text-sm font-light pt-3 mb-2">Minhas redes sociais</p>
          <a href="https:www.linkedin.com/in/hellen-cristina-araújo-da-silva"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/HellenCristinaP"><i class="fab fa-github"></i></a>        
        </footer>
    </div>
  )
}

export default App