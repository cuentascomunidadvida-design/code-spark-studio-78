import { Smartphone } from "lucide-react";
import qrOfrendas from "@/assets/qr-ofrendas.jpg";

const LLAVE = "0065534737";

const OfrendaSection = () => {
  return (
    <section
      id="ofrenda"
      className="py-20 lg:py-28 px-6 lg:px-20"
      style={{ background: "linear-gradient(135deg, hsl(var(--navy)), hsl(var(--navy-mid)))" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-[3px] text-accent/80 font-semibold uppercase block mb-3">
            Generosidad
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight mb-5">
            Gracias por tus ofrendas
          </h2>
          <p className="text-base text-primary-foreground/70 leading-relaxed max-w-xl mx-auto">
            Tu generosidad hace posible que más personas encuentren esperanza. Cada ofrenda es una semilla de fe.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* QR card */}
          <div
            className="bg-card rounded-2xl p-6 flex flex-col items-center text-center border border-border"
            style={{ boxShadow: "0 20px 60px hsla(224,60%,8%,0.4)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-[11px] tracking-[2px] text-muted-foreground font-semibold uppercase">
                Escanea con tu app bancaria
              </span>
            </div>

            <div className="rounded-xl overflow-hidden bg-white p-2 mb-4 w-full max-w-[260px]">
              <img
                src={qrOfrendas}
                alt="Código QR para ofrendas - Bre-B Bancolombia"
                className="w-full h-auto block rounded-lg"
              />
            </div>

            <div className="w-full border-t border-border pt-4">
              <p className="text-[11px] tracking-[2px] text-muted-foreground font-semibold uppercase mb-1">
                Llave Bre-B
              </p>
              <p className="font-display text-2xl font-bold text-primary tracking-wider">
                {LLAVE}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Transfiere desde cualquier banco de Colombia
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mt-6">
            <p className="text-sm text-primary-foreground/85 italic leading-relaxed text-center">
              "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
            </p>
            <p className="text-xs text-accent font-semibold tracking-[1px] text-center mt-2">
              — 2 Corintios 9:7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfrendaSection;
