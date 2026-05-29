import { Link } from "react-router";

const partnerLogos = [
  "Company 1",
  "Company 2",
  "Company 3",
  "Company 4",
  "Company 5",
  "Company 6",
];

const productMoments = [
  {
    eyebrow: "In-store QR styling",
    title: "One scan, a complete look.",
    body: "Place MaisonMatch QR codes on hangtags, fitting-room cards, mirrors, or receipts. A shopper starts with one piece and sees complete outfits made only from what your boutique has in stock.",
  },
  {
    eyebrow: "Owner curation",
    title: "Your taste stays in control.",
    body: "Approve, reject, and refine pairings so recommendations feel like your shop, not a generic styling feed. The system learns from what you keep and what you remove.",
  },
  {
    eyebrow: "Wardrobe memory",
    title: "Every purchase becomes context.",
    body: "MaisonMatch remembers what a customer already owns, then matches new arrivals to those past purchases for personal follow-ups that feel useful, not automated.",
  },
];

const featureCards = [
  {
    title: "Live inventory logic",
    body: "Recommendations are built from available sizes, colors, categories, and current stock, so the look can actually be purchased.",
  },
  {
    title: "No customer app",
    body: "Customers scan from their phone and shop instantly. No downloads, no accounts required before they see value.",
  },
  {
    title: "Boutique clienteling",
    body: "Send sharper texts and emails based on what someone bought, what just arrived, and what pairs beautifully.",
  },
  {
    title: "Practical setup",
    body: "Designed to work with Shopify, Square, Lightspeed, or an existing catalog without asking your team to rebuild operations.",
  },
];

const stats = [
  { value: "2–3", label: "outfits generated from a single item" },
  { value: "0", label: "customer apps required" },
  { value: "4", label: "sales moments supported: scan, cart, receipt, follow-up" },
];

export default function HomeShowcase() {
  return (
    <>
      <section className="border-y border-border bg-card py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Trusted by the next generation of boutiques
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/70 max-w-sm">
                Placeholder partners for now. Gonna replace these with boutiques, partners, or customer logos as MaisonMatch grows.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
              {partnerLogos.map((logo) => (
                <div
                  key={logo}
                  className="bg-card px-6 py-8 text-center text-[12px] tracking-[0.22em] uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="py-16 md:py-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
      <div className="lg:sticky lg:top-28 space-y-6 md:space-y-8">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-5 md:mb-6">
            The product
          </p>

          <h2 className="text-[34px] md:text-[56px] leading-[1.08] md:leading-[1.05] tracking-tight">
            A styling layer for the boutique floor.
          </h2>
        </div>

        <p className="text-[15px] md:text-[17px] leading-relaxed text-foreground/75 max-w-md">
          MaisonMatch sits between your inventory and your customer
          conversations. It helps your team recommend the full look without
          turning your store into a software project.
        </p>

        <Link
          to="/solution"
          className="inline-flex w-full sm:w-auto justify-center px-8 py-3 border border-border hover:bg-muted transition-colors text-[13px] tracking-wide"
        >
          Explore the Solution
        </Link>
      </div>

      <div className="space-y-4 md:space-y-5">
        {productMoments.map((moment, index) => (
          <article
            key={moment.title}
            className="border border-border bg-background p-6 md:p-8 hover:bg-card transition-colors"
          >
            <div className="flex items-start justify-between gap-6 mb-8 md:mb-0 md:grid md:grid-cols-[140px_1fr] md:gap-8">
              <div className="space-y-3 md:space-y-5 shrink-0">
                <p className="text-[34px] md:text-[48px] leading-none tracking-tighter text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="text-[10px] md:text-[11px] tracking-[0.22em] md:tracking-[0.25em] uppercase text-muted-foreground max-w-[120px]">
                  {moment.eyebrow}
                </p>
              </div>

              <div>
                <h3 className="text-[24px] md:text-[28px] leading-[1.12] tracking-tight mb-4">
                  {moment.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-foreground/70">
                  {moment.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-primary-foreground/10 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1632469188022-b5db09a70fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwb3V0Zml0JTIwc3R5bGluZyUyMGZsYXRsYXl8ZW58MXx8fHwxNzc5OTQ3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Editorial outfit flatlay"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 border border-primary-foreground/20 m-6" />
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
                  Why it catches attention
                </p>
                <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight max-w-xl">
                  It makes the boutique feel more personal, not more automated.
                </h2>
              </div>
              <p className="text-[17px] leading-relaxed text-primary-foreground/75 max-w-lg">
                The customer sees styling that feels considered. The owner sees a cleaner way to increase basket size. The staff gets a tool that supports their taste instead of replacing it.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 pt-6 border-t border-primary-foreground/15">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[42px] leading-none tracking-tight text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-[12px] leading-relaxed text-primary-foreground/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              What MaisonMatch helps with
            </p>
            <h2 className="text-[40px] md:text-[52px] leading-[1.1] tracking-tight">
              Built around real boutique selling moments.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
            {featureCards.map((feature) => (
              <article key={feature.title} className="bg-background p-8 min-h-[260px] hover:bg-card transition-colors">
                <h3 className="text-[22px] tracking-tight mb-5">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Customer moment
              </p>
              <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight mb-8">
                From “I like this jacket” to “I’ll take the full look.”
              </h2>
              <p className="text-[15px] leading-relaxed text-foreground/70 max-w-lg">
                The homepage should sell the feeling first: MaisonMatch helps a boutique become more helpful at exactly the moment a customer is deciding what else belongs with the piece they already love.
              </p>
            </div>

            <div className="border border-border bg-background p-6 md:p-8">
              <div className="border-b border-border pb-6 mb-6 flex justify-between gap-6">
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                    Selected item
                  </p>
                  <h3 className="text-[24px] tracking-tight">Oversized denim jacket</h3>
                </div>
                <p className="text-[13px] text-foreground/60">$188</p>
              </div>

              <div className="space-y-4">
                {["Ribbed ivory tank", "Soft black trouser", "Cognac leather belt"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between border border-border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-12 bg-muted" />
                      <div>
                        <p className="text-[15px]">{item}</p>
                        <p className="text-[12px] text-muted-foreground mt-1">
                          Pairing {index + 1} · in stock
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-accent">
                      Add
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[12px] leading-relaxed text-muted-foreground">
                Visual placeholder for the future product experience. Keep it editorial and product-led, not dashboard-heavy.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
