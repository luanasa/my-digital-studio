const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 text-center">
            Sobre mim
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Olá! Sou <strong className="text-foreground font-semibold">Luana Sá Martins</strong>, 
              uma apaixonada por palavras e pela forma como elas podem transformar experiências digitais. 
              Minha jornada começou como escritora e criadora de conteúdo, explorando o poder das narrativas 
              para conectar pessoas e ideias e evoluiu para o universo do design de interfaces e desenvolvimento 
              front-end, onde transformo conceitos em experiências visuais e interativas.
            </p>
            
            <p>
              Fundei a <strong className="text-primary font-semibold">Wildfire Arts</strong>, minha marca 
              pessoal onde desenvolvo produtos digitais, templates, websites e conteúdos estratégicos. Acredito que 
              cada projeto é uma oportunidade de criar algo significativo, combinando design de conteúdo, 
              UX Writing, UI/UX Design e estratégia digital.
            </p>
            
            <p>
              Meu trabalho é guiado por três pilares: <strong className="text-foreground font-semibold">clareza, 
              empatia e estratégia</strong>. Seja criando microtextos que facilitam a jornada do usuário, interfaces intuitivas,
              landing pages de alto impacto ou narrativas de marca, meu objetivo é sempre o mesmo: transformar complexidade em simplicidade e criar conexões autênticas.
            </p>
            
            <p className="text-foreground font-medium">
              Especialidades: Design de Conteúdo • UX Writing • UI/UX Design • Front-end (Websites & Landing Pages) • Copywriting Estratégico • Branding • 
              Storytelling Digital • Estratégia de Marketing de Conteúdo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
