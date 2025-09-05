function prioridades() {
  return (
    <div>
        <h1 className="text-2xl">O que eu prezo</h1>
        <section className="border rounded-md p-4 m-2 flex flex-col items-center">
            <h2>Responsividade</h2>
            <p>Me preocupo em garantir sites responsitvos, por isso, estudo sobre design responsivo e como aplicar técnicas de CSS para diferentes tamanhos de tela. Sempre utulizando o método Mobile-Firts</p>
        </section>
        <section className="border rounded-md p-4 m-2 flex flex-col items-center">
            <h2 className="">Acessibilidade</h2>
            <p>Aprendendo e aplicando boas práticas de acessibilidade em meus projetos, como o uso adequado de ARIA e a garantia de que todos os elementos sejam navegáveis por teclado.</p>
        </section>
        <section className="border rounded-md p-4 m-2 flex flex-col items-center">
            <h2 className="">Organização</h2>
            <p>Busco manter um código limpo e organizado, utilizando boas práticas de nomenclatura e estrutura de pastas, usando o Jira para gerenciamento de tarefas organizando e o fluxo de trabalho com ferramentas como Git e GitHub.</p>
        </section>

    </div>
  );
}

export default prioridades