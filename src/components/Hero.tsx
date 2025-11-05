import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(242, 235, 229, 0.9), rgba(242, 235, 229, 0.95)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            Transformo ideias em{" "}
            <span className="text-primary">experiências digitais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in-up animate-delay-100 max-w-2xl mx-auto leading-relaxed">
            Content Designer, UX Writer, UI/UX Designer e Desenvolvedora Frontend especializada em criar narrativas e interfaces que conectam marcas e pessoas através de experiências empáticas, funcionais e memoráveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Vamos conversar
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 hover:border-primary/40 text-foreground font-medium px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Ver portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
