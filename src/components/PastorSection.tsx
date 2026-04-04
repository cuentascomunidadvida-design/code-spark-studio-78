import pastor from "@/assets/pastor.jpg";

const PastorSection = () => (
  <section className="bg-card py-20 lg:py-28 px-6 lg:px-20">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative max-w-sm mx-auto lg:mx-0">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={pastor} alt="Pastor" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 -z-10" />
      </div>

      <div>
        <span className="text-[11px] tracking-[3px] text-accent font-semibold uppercase block mb-3">
          Nuestro Pastor
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-4">
          Liderazgo con propósito
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Con un corazón apasionado por la enseñanza de la Palabra, nuestro pastor lidera esta comunidad con dedicación, sabiduría y amor. Su visión es ver familias transformadas por el poder del Evangelio.
        </p>
        <p className="text-sm text-muted-foreground/80 italic">
          "Porque de Él, y por Él, y para Él, son todas las cosas." — Romanos 11:36
        </p>
      </div>
    </div>
  </section>
);

export default PastorSection;
