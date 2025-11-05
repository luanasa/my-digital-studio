import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import wildfireImage from "@/assets/portfolio-wildfire.png";
import notionImage from "@/assets/portfolio-notion.png";
import ebooksImage from "@/assets/portfolio-ebooks.jpg";
import uxImage from "@/assets/portfolio-ux.jpg";

const projects = [
  {
    title: "Wildfire Arts",
    description: "Marca pessoal completa incluindo identidade visual, estratégia de conteúdo e desenvolvimento de produtos digitais focados em criatividade e inovação.",
    image: wildfireImage,
    tags: ["Branding", "Design de Conteúdo", "Estratégia Digital"],
  },
  {
    title: "Templates Notion",
    description: "Coleção de templates funcionais e esteticamente planejados para otimizar produtividade, combinando design intuitivo com estratégia organizacional.",
    image: notionImage,
    tags: ["Design de Produto", "UX", "Produtividade"],
  },
  {
    title: "eBooks de Marketing e Finanças",
    description: "Criação de conteúdo estratégico e copywriting persuasivo para guias digitais, transformando conhecimento complexo em leitura acessível e envolvente.",
    image: ebooksImage,
    tags: ["Copywriting", "Conteúdo Estratégico", "Editorial"],
  },
  {
    title: "Amostras de UX Writing",
    description: "Microtextos e experiências de interface que guiam usuários com empatia e clareza, facilitando jornadas e eliminando pontos de fricção.",
    image: uxImage,
    tags: ["UX Writing", "Interface", "Experiência do Usuário"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-center">
            Portfólio
          </h2>
          <p className="text-lg text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Uma seleção de projetos que refletem minha paixão por criar conteúdo estratégico 
            e experiências digitais memoráveis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-card shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl font-display text-foreground">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
