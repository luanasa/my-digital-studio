import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Coffee } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-center">
            Vamos conversar?
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            Tem um projeto em mente ou quer discutir como posso ajudar? 
            Entre em contato através do formulário ou redes sociais.
          </p>

          <div className="grid gap-12">

            {/* Contact Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Outras formas de contato
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:luamartinstravel@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-foreground/70">luamartinstravel@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/luamartins/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">LinkedIn</div>
                      <div className="text-sm text-foreground/70">Vamos nos conectar</div>
                    </div>
                  </a>

                  <a
                    href="https://ko-fi.com/awildfire/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Coffee className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Ko-fi</div>
                      <div className="text-sm text-foreground/70">Apoie meu trabalho</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
