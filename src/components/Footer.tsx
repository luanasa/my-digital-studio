import { Mail, Linkedin, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Luana Sá Martins
              </h3>
              <p className="text-background/80 leading-relaxed">
                Content Designer e estrategista digital apaixonada por criar experiências 
                que conectam marcas e pessoas através de narrativas autênticas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:luamartinstravel@gmail.com"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/luamartins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://ko-fi.com/awildfire/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300"
                  aria-label="Ko-fi"
                >
                  <Coffee size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 text-center text-background/70 text-sm">
            <p>© {currentYear} Luana Sá Martins. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
