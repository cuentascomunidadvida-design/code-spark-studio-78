const horarios = [
  { icon: "☀️", text: "Culto General — Domingos 10:00 AM" },
  { icon: "🌙", text: "Culto Oración — Viernes 8:30 PM (Virtual)" },
  { icon: "🌙", text: "Estudio Bíblico — Martes 8:30 PM" },
];

const HorariosBar = () => (
  <div className="bg-navy text-primary-foreground flex justify-center items-center gap-6 lg:gap-12 px-6 lg:px-12 py-5 flex-wrap">
    {horarios.map((h, i) => (
      <div key={i} className="flex items-center gap-2.5">
        {i > 0 && <div className="hidden lg:block w-px h-6 bg-primary-foreground/20 mr-4" />}
        <span className="text-xl">{h.icon}</span>
        <span className="text-sm font-semibold tracking-wide">{h.text}</span>
      </div>
    ))}
  </div>
);

export default HorariosBar;
