const PredicacionesSection = () => (
  <section id="predicaciones" className="bg-navy-dark py-20 lg:py-28 px-6 lg:px-20 text-center">
    <div className="max-w-4xl mx-auto">
      <span className="text-[11px] tracking-[3px] text-accent/60 font-semibold uppercase block mb-3">
        Canal YouTube
      </span>
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
        Última Predicación
      </h2>
      <p className="text-base text-primary-foreground/50 leading-relaxed max-w-xl mx-auto mb-12">
        Revive el mensaje del último domingo. Visita nuestro canal para ver todas las predicaciones.
      </p>

      <div
        className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-accent/25 aspect-video"
        style={{ boxShadow: "0 0 80px hsla(197,78%,53%,0.1)" }}
      >
        <iframe
          className="w-full h-full border-none block"
          src="https://www.youtube.com/embed/-YV2NFsCfH0?si=H3W5FT-vpuSqX5hz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <a
        href="https://www.youtube.com/@comunidadvidacristiana8534"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all hover:bg-sky-dark hover:-translate-y-0.5 mt-10"
        style={{ boxShadow: "0 8px 30px hsla(197,78%,53%,0.35)" }}
      >
        ▶ Ver todas las predicaciones
      </a>
    </div>
  </section>
);

export default PredicacionesSection;
