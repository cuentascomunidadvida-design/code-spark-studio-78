const OfrendaSection = () => (
  <section
    id="ofrenda"
    className="py-20 lg:py-28 px-6 lg:px-20 text-center"
    style={{ background: "linear-gradient(135deg, hsl(var(--navy)), hsl(var(--navy-mid)))" }}
  >
    <div className="max-w-2xl mx-auto">
      <span className="text-[11px] tracking-[3px] text-primary-foreground/60 font-semibold uppercase block mb-3">
        Generosidad
      </span>
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight mb-5">
        Gracias por tus donaciones
      </h2>
      <p className="text-base text-primary-foreground/75 leading-relaxed max-w-lg mx-auto mb-10">
        Tu generosidad hace posible que más personas encuentren esperanza. Cada ofrenda es una semilla de fe.
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold no-underline transition-all hover:bg-sky-dark hover:-translate-y-1"
        style={{ boxShadow: "0 10px 30px hsla(197,78%,53%,0.35)" }}
      >
        💙 Ofrenda en línea
      </a>
    </div>
  </section>
);

export default OfrendaSection;
