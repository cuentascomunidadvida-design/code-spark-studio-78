import { useState, useEffect } from "react";
import community1 from "@/assets/community1.jpg";
import youth from "@/assets/youth.jpg";
import kids from "@/assets/kids.jpg";
import family from "@/assets/family.jpg";
import worship from "@/assets/worship.jpg";
import logo from "@/assets/logo.png";

const slides = [
  { src: logo, isLogo: true },
  { src: community1 },
  { src: youth },
  { src: kids },
  { src: family },
  { src: worship },
];

const features = [
  { title: "Doctrina", desc: "Enseñanza sólida y constante de la Palabra de Dios." },
  { title: "Comunión", desc: "Un entorno fraternal donde cada persona es bienvenida y acogida." },
  { title: "Ayuda", desc: "Recursos y servicio concreto a nuestra comunidad local." },
  { title: "Oración", desc: "Una vida devocional que honra y glorifica a Dios en todo." },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="bg-muted py-20 lg:py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Slideshow */}
        <div className="relative h-[340px] lg:h-[480px]">
          <div className="absolute top-0 left-0 w-[75%] h-[240px] lg:h-[340px] rounded-2xl overflow-hidden shadow-xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${
                  i === current ? "opacity-100" : "opacity-0"
                } ${slide.isLogo ? "bg-navy-dark p-8" : ""}`}
              >
                <img
                  src={slide.src}
                  alt={`Slide ${i + 1}`}
                  className={
                    slide.isLogo
                      ? "w-36 h-36 object-contain rounded-full bg-card p-2.5"
                      : "w-full h-full object-cover"
                  }
                />
              </div>
            ))}
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-[7px] rounded-full transition-all ${
                    i === current ? "bg-primary-foreground w-[18px]" : "bg-primary-foreground/40 w-[7px]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Accent card */}
          <div
            className="absolute bottom-0 right-0 w-[55%] h-[160px] lg:h-[200px] rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-1.5"
            style={{ background: "var(--gradient-sky)", boxShadow: "var(--shadow-card)" }}
          >
            <span className="font-display text-4xl lg:text-5xl font-black text-accent-foreground">+15</span>
            <span className="text-xs text-accent-foreground/85 font-medium tracking-[1px]">Años de ministerio</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-[11px] tracking-[3px] text-accent font-semibold uppercase mb-3 block">
            Sobre Nosotros
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-primary mb-5">
            Partícipes de la
            <br />
            naturaleza Divina
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
            Nuestra Misión es <strong className="text-primary font-semibold">enseñar</strong> los principios de la
            palabra de Dios de manera constante y consistente,{" "}
            <strong className="text-primary font-semibold">construyendo</strong> un entorno fraternal donde los
            miembros se sientan acogidos,{" "}
            <strong className="text-primary font-semibold">gestionando y aportando</strong> recursos al servicio de
            la comunidad y <strong className="text-primary font-semibold">fomentando</strong> una vida devocional que
            honre y glorifique a Dios.
          </p>

          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3.5">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                <p className="text-[15px] text-foreground leading-relaxed">
                  <strong className="text-primary">{f.title}</strong> — {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
