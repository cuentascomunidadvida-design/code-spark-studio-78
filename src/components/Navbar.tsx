import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Conócenos" },
  { href: "#ministerios", label: "Ministerios" },
  { href: "#visitanos", label: "Visítanos" },
  { href: "#predicaciones", label: "Predicaciones" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-shadow duration-300 ${
        scrolled
          ? "bg-card/97 shadow-lg border-border"
          : "bg-card/95 border-transparent"
      }`}
      style={{ height: 76 }}
    >
      <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center overflow-hidden shadow-md shrink-0">
            <img src={logo} alt="CVC Logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-[13px] font-bold text-primary leading-tight tracking-tight">
              Comunidad de Vida Cristiana
            </span>
            <span className="text-[7px] tracking-[1px] text-accent font-semibold uppercase mt-0.5">
              DOCTRINA · COMUNIÓN · AYUDA · ORACIÓN
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-primary px-3 py-2 rounded-md hover:text-accent hover:bg-accent/5 transition-all no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#ofrenda"
            className="ml-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold no-underline hover:bg-navy-mid transition-colors"
          >
            Ofrendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-primary py-2 no-underline hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#ofrenda"
            onClick={() => setMobileOpen(false)}
            className="block bg-primary text-primary-foreground text-center px-5 py-2.5 rounded-lg text-sm font-semibold no-underline mt-3"
          >
            Ofrendar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
