import { Youtube, Play } from "lucide-react";

const VIDEO_ID = "-YV2NFsCfH0";
const CHANNEL_URL = "https://www.youtube.com/@comunidadvidacristiana8534";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

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
        className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-accent/25 aspect-video bg-black"
        style={{ boxShadow: "0 0 80px hsla(197,78%,53%,0.1)" }}
      >
        <iframe
          className="w-full h-full border-none block"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
          title="Última predicación - Comunidad de Vida Cristiana"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <a
          href={WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-6 py-3.5 rounded-xl text-base font-semibold no-underline transition-all hover:bg-primary-foreground/15 hover:-translate-y-0.5"
        >
          <Play className="w-5 h-5" fill="currentColor" />
          Ver en YouTube
        </a>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all hover:bg-sky-dark hover:-translate-y-0.5"
          style={{ boxShadow: "0 8px 30px hsla(197,78%,53%,0.35)" }}
        >
          <Youtube className="w-5 h-5" />
          Ver todas las predicaciones
        </a>
      </div>
    </div>
  </section>
);

export default PredicacionesSection;
