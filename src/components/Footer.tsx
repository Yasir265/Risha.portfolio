const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.3em] text-foreground uppercase mb-6">
              Rimsha Malick
            </h3>
            <p className="font-sans text-xs leading-relaxed text-muted-foreground max-w-xs">
              Haute couture crafted in the heart of Paris.
              Where art meets elegance, and every stitch tells a story.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {["Collections", "Lookbook", "Runway", "About", "Press", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
              Atelier
            </p>
            <div className="font-sans text-xs leading-relaxed text-muted-foreground space-y-2">
              <p>Saddar Rwp</p>
              <p>Punjab, Pakistan</p>
              <p className="mt-4">atelier@maison.com</p>
              <p>+92 3111111111</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            © 2026 Rimsha Malick. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
