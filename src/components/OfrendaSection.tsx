import { Copy, Check, Smartphone, Building2 } from "lucide-react";
import { useState } from "react";
import qrOfrendas from "@/assets/qr-ofrendas.jpg";

const LLAVE = "0065534737";

const OfrendaSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LLAVE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* QR card */}
          <div
            className="bg-card rounded-2xl p-8 flex flex-col items-center text-center border border-border"
            style={{ boxShadow: "0 20px 60px hsla(224,60%,8%,0.4)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Smartphone className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-[11px] tracking-[2px] text-muted-foreground font-semibold uppercase">
                Escanea con tu app bancaria
              </span>
            </div>

            <div className="rounded-xl overflow-hidden bg-white p-2 mb-5 w-full max-w-[280px]">
              <img
                src={qrOfrendas}
                alt="Código QR para ofrendas - Bre-B Bancolombia"
                className="w-full h-auto block"
              />
            </div>

            <p className="text-xs text-muted-foreground">
              Compatible con Bre-B y todos los bancos de Colombia
            </p>
          </div>

          {/* Llave + info card */}
          <div className="flex flex-col gap-6">
            <div
              className="bg-card rounded-2xl p-8 border border-border flex-1 flex flex-col justify-center"
              style={{ boxShadow: "0 20px 60px hsla(224,60%,8%,0.4)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-[11px] tracking-[2px] text-muted-foreground font-semibold uppercase">
                  Llave Bre-B
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Transfiere desde cualquier banco usando esta llave:
              </p>

              <div className="flex items-center gap-3 bg-muted/40 border border-border rounded-xl p-4">
                <span className="font-display text-2xl lg:text-3xl font-bold text-primary tracking-wider flex-1 text-center">
                  {LLAVE}
                </span>
                <button
                  onClick={handleCopy}
                  className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-sky-dark"
                  aria-label="Copiar llave"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                A nombre de <span className="font-semibold text-primary">Iglesia Cristiana Comunidad de Vida Cristiana</span>.
                Recibirás confirmación inmediata desde tu app.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <p className="text-sm text-primary-foreground/85 italic leading-relaxed text-center">
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
              </p>
              <p className="text-xs text-accent font-semibold tracking-[1px] text-center mt-2">
                — 2 Corintios 9:7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfrendaSection;
