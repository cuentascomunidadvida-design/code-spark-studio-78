import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground/50 px-6 lg:px-20 pt-16 pb-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="CVC" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <span className="font-display text-[13px] font-bold text-primary-foreground leading-tight block">
                Comunidad de Vida Cristiana
              </span>
              <span className="text-[7px] tracking-[1px] text-accent font-semibold uppercase mt-1 block">
                DOCTRINA · COMUNIÓN · AYUDA · ORACIÓN
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-[280px]">
            Una comunidad de familias que te acompañamos en el caminar cristiano.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-5">Navegación</h5>
          {["Inicio", "Conócenos", "Ministerios", "Predicaciones"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-primary-foreground/40 no-underline mb-2.5 hover:text-sky-light transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div>
          <h5 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-5">Ministerios</h5>
          {["Niños", "Jóvenes", "Parejas", "Alabanza", "Misiones"].map((m) => (
            <a key={m} href="#ministerios" className="block text-sm text-primary-foreground/40 no-underline mb-2.5 hover:text-sky-light transition-colors">
              {m}
            </a>
          ))}
        </div>

        <div>
          <h5 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-5">Contacto</h5>
          <p className="text-sm leading-relaxed mb-2">Cra. 80a #10b-22</p>
          <p className="text-sm leading-relaxed mb-2">Bogotá, Colombia</p>
          <p className="text-sm leading-relaxed mb-2">+57 (315) 5567997</p>
          <p className="text-sm leading-relaxed">info@icvc.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2025 Comunidad de Vida Cristiana. Todos los derechos reservados.</p>
        <div className="flex gap-3">
          <a
            href="https://www.youtube.com/@comunidadvidacristiana8534"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 no-underline hover:bg-accent hover:border-accent hover:text-primary-foreground transition-all"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
