const items = [
  "Culto General — Domingos 10:00 AM",
  "Culto de Oración — Viernes 8:30 PM (Virtual)",
  "Estudio Bíblico — Martes 8:30 PM",
  "Grupos de Vida — Consulta horarios",
];

const TickerBar = () => (
  <div className="fixed top-[76px] w-full z-40 bg-navy h-8 flex items-center border-b-2 border-accent overflow-hidden">
    <div className="shrink-0 bg-accent text-accent-foreground text-[11px] font-bold tracking-[2px] uppercase px-4 h-full flex items-center whitespace-nowrap">
      Servicios:
    </div>
    <div className="flex overflow-hidden flex-1">
      <div className="flex items-center whitespace-nowrap animate-ticker text-xs text-primary-foreground/85 font-medium tracking-wide">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8">
            {i > 0 && <span className="text-primary-foreground/30 mr-8">✦</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TickerBar;
