import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function prioridades() {

  function Responsive() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <section className="border rounded-md p-4 m-2 flex flex-col items-center">
              <h2 className="text-2xl pb-2">Responsividade</h2>
              <p>Desenvolvimento <strong>Mobile-First</strong>, aplicando técnicas de CSS para garantir que a interface e a <b>experiência do usuário</b> sejam perfeitas em qualquer tamanho de tela.</p>
            </section>
          </div>
          <div>
            <section className="border rounded-md p-4 m-2 flex flex-col items-center">
              <h2 className="text-2xl pb-2">Acessibilidade</h2>
              <p>Aprendendo e aplicando boas práticas de acessibilidade em meus projetos, como o uso adequado de <strong>ARIA</strong> e a garantia de que todos os elementos sejam <b>navegáveis por teclado.</b></p>
            </section>
          </div>
          <div>
            <section className="border rounded-md p-4 m-2 flex flex-col items-center">
              <h2 className="text-2xl pb-2">Organização</h2>
              <p>Busco manter um código limpo e <b>organizado, utilizando boas práticas de nomenclatura e estrutura de pastas</b>, usando o <strong>Jira</strong> para gerenciamento de tarefas organizando e o fluxo de trabalho com ferramentas como <strong>Git</strong> e <strong>GitHub</strong>.</p>
            </section>
          </div>
        </Slider>
      </div>
    );
  }

  return (
    <section id="prioridades">
      <h2 className="mb-5">Minhas Prioridades</h2>
      <Responsive />
    </section>
  );
}

export default prioridades