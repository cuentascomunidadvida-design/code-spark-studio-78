const VisitanosSection = () => (
  <section id="visitanos" className="bg-muted py-20 lg:py-28 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
      <div>
        <span className="text-[11px] tracking-[3px] text-accent font-semibold uppercase block mb-3">
          Visítanos
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-4">
          Queremos conocerte
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
          Si el Señor te trajo hasta este punto, queremos saber de ti, aquí nos puedes contactar:
        </p>

        <div className="space-y-7">
          <div>
            <h4 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-2">Dirección</h4>
            <p className="text-[15px] text-foreground leading-relaxed">
              Cra. 80a #10b-22, Bogotá, Colombia
            </p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-2">
              Horarios de Servicio
            </h4>
            <p className="text-[15px] text-foreground leading-relaxed">
              Domingos 10:00 AM — Culto General
              <br />
              Viernes 8:30 PM — Culto de Oración (Virtual)
              <br />
              Martes 8:30 PM — Estudio Bíblico
            </p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[2px] text-accent font-semibold uppercase mb-2">Contacto</h4>
            <p className="text-[15px] text-foreground leading-relaxed">
              info@icvc.com
              <br />
              +57 (315) 5567997
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden h-[380px] border border-accent/20"
        style={{ boxShadow: "var(--shadow-card)" }}>
        <iframe
          className="w-full h-full border-none block"
          src="https://maps.google.com/maps?q=Cra.+80a+%2310b-22,+Bogot%C3%A1&output=embed&z=16"
          title="Ubicación Iglesia CVC"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default VisitanosSection;
