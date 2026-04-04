import { Baby, Flame, Heart, Music, Globe, Building } from "lucide-react";

const ministerios = [
  { icon: Baby, title: "Niños", desc: "Un espacio seguro y divertido donde los más pequeños descubren el amor de Dios a través de actividades y enseñanza creativa." },
  { icon: Flame, title: "Jóvenes", desc: "Una generación apasionada por Dios. Encuentros semanales, retiros y misiones que forjan carácter e identidad." },
  { icon: Heart, title: "Parejas", desc: "Fortaleciendo matrimonios y familias con herramientas bíblicas y prácticas para una vida plena en comunidad." },
  { icon: Music, title: "Alabanza", desc: "Un equipo de adoración comprometido con llevar la presencia de Dios en cada servicio con excelencia y corazón." },
  { icon: Globe, title: "Misiones", desc: "Alcanzando comunidades locales e internacionales con el evangelio. Participa en nuestras campañas misioneras." },
  { icon: Building, title: "Fundación", desc: "Sirviendo a la comunidad con programas de ayuda social, educación y acompañamiento integral a familias." },
];

const MinisteriosSection = () => (
  <section id="ministerios" className="bg-card py-20 lg:py-28 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-[11px] tracking-[3px] text-accent font-semibold uppercase block mb-3">
          Ministerios
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-tight">
          Crece con nosotros
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministerios.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.title}
              className="group rounded-2xl p-8 border border-border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/30 text-center"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--gradient-navy-sky)" }} />
              
              <Icon className="w-10 h-10 text-accent mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold text-primary mb-2.5">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MinisteriosSection;
