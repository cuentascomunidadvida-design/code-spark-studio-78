import qrOfrendas from "@/assets/qr-ofrendas.jpg.asset.json";

const OfrendaSection = () => {
  return (
    <section
      id="ofrenda"
      className="py-10 lg:py-14 px-6 lg:px-20"
      style={{ background: "linear-gradient(135deg, hsl(var(--navy)), hsl(var(--navy-mid)))" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[10px] tracking-[3px] text-accent/80 font-semibold uppercase block mb-2">
          Generosidad
        </span>
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground tracking-tight mb-3">
          Gracias por tus ofrendas
        </h2>

        <div className="max-w-[180px] mx-auto my-5">
          <img
            src={qrOfrendas.url}
            alt="Código QR para ofrendas - Bre-B Bancolombia"
            className="w-full h-auto block rounded-lg"
          />
        </div>

        <p className="text-[11px] tracking-[2px] text-primary-foreground/70 font-semibold uppercase mb-1">
          Llave Bre-B
        </p>
        <p className="font-display text-lg font-bold text-primary-foreground tracking-wider mb-5">
          0065534737
        </p>

        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 max-w-lg mx-auto">
          <p className="text-sm text-primary-foreground/85 italic leading-relaxed text-center">
            "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
          </p>
          <p className="text-xs text-accent font-semibold tracking-[1px] text-center mt-2">
            — 2 Corintios 9:7
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfrendaSection;
