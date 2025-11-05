import { Pen, MessageSquare, Sparkles, Target, FileText } from "lucide-react";

const services = [
    {
    icon: Target,
    title: "UI/UX Design",
    description: "Design de interfaces centrado no usuário — combinando estética, funcionalidade e usabilidade para criar experiências digitais encantadoras e eficientes.",
  },
    {
    icon: Sparkles,
    title: "Desenvolvimento Front-end",
    description: "Criação de websites e landing pages responsivas, otimizadas e de alta performance. Da prototipagem à publicação, transformo ideias em produtos digitais funcionais e visualmente impactantes.",
  },
  {
    icon: MessageSquare,
    title: "UX Writing",
    description: "Microtextos estratégicos que guiam usuários com clareza e empatia, criando interfaces mais intuitivas e humanizadas.",
  },
  {
    icon: Pen,
    title: "Copywriting",
    description: "Textos persuasivos e envolventes que convertem, desde landing pages até campanhas de marketing digital.",
  },
  {
    icon: FileText,
    title: "Criação de Conteúdo",
    description: "Desenvolvimento de conteúdo estratégico para blogs, redes sociais, e-books e produtos digitais.",
  },
  {
    icon: Target,
    title: "Estratégia Digital",
    description: "Planejamento e execução de estratégias de conteúdo alinhadas aos objetivos de negócio e audiência.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-center">
            Serviços
          </h2>
          <p className="text-lg text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Soluções personalizadas para transformar sua comunicação digital e criar experiências 
            que realmente importam.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
