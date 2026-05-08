import logo from "@/assets/logo.png";
import celebracion from "@/assets/celebracion.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-28">
    {/* Background */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    {/* Right side photo (50% width on desktop) */}
    <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
      <img
        src={celebracion}
        alt="Comunidad CVC celebrando juntos"
        className="w-full h-full object-cover"
      />
      {/* Fade from left (navy) into image for seamless blend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--primary)) 0%, hsla(224,60%,15%,0.6) 25%, transparent 60%)",
        }}
      />
    </div>

    {/* Grid pattern */}
    <div
      className="absolute inset-0 animate-grid-drift opacity-40 lg:w-1/2"
      style={{
        backgroundImage:
          "linear-gradient(hsla(197,78%,53%,0.07) 1px,transparent 1px), linear-gradient(90deg,hsla(197,78%,53%,0.07) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Glows */}
    <div className="absolute top-[15%] left-[8%] w-[520px] h-[520px] rounded-full animate-pulse-glow pointer-events-none"
      style={{ background: "radial-gradient(circle, hsla(197,78%,53%,0.18) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[8%] left-[4%] w-80 h-80 rounded-full animate-pulse-glow-slow pointer-events-none"
      style={{ background: "radial-gradient(circle, hsla(224,60%,26%,0.35) 0%, transparent 70%)" }} />

    {/* Content */}
    <div className="relative z-10 px-6 lg:px-20 max-w-[920px] lg:max-w-[50%] animate-fade-up">
      <div className="w-28 h-28 rounded-full bg-card border-[3px] border-accent/40 flex items-center justify-center overflow-hidden mb-6"
        style={{ boxShadow: "var(--shadow-glow)" }}>
        <img src={logo} alt="CVC" className="w-24 h-24 object-contain" />
      </div>

      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">
        Iglesia{" "}
        <em className="not-italic text-sky-light">
          Comunidad
          <br />
          de Vida Cristiana
        </em>
      </h1>

      <p className="text-base text-primary-foreground/75 leading-relaxed max-w-[560px] mb-2 italic">
        "Y perseveraban en la comunión unos con otros, en el partimiento del pan y en las oraciones."
      </p>
      <p className="text-sm text-sky-light font-semibold tracking-[1px] mb-10">
        — Hechos 2:42
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#predicaciones"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all hover:bg-sky-dark hover:-translate-y-0.5"
          style={{ boxShadow: "0 8px 30px hsla(197,78%,53%,0.4)" }}
        >
          🎙 Predicaciones
        </a>
        <a
          href="#visitanos"
          className="inline-flex items-center gap-2 bg-transparent text-primary-foreground px-8 py-4 rounded-xl text-base font-medium no-underline border border-primary-foreground/25 transition-all hover:border-accent hover:text-accent"
        >
          Visítanos →
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span className="text-[10px] text-primary-foreground/35 tracking-[3px] uppercase">Scroll</span>
      <div className="w-px h-10 animate-scroll-line"
        style={{ background: "linear-gradient(to bottom, hsla(197,78%,53%,0.6), transparent)" }} />
    </div>
  </section>
);

export default HeroSection;
