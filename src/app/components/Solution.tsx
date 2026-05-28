const outcomes = [
  {
    label: "Average transaction value",
    body: "Pair the original item with complementary pieces while the customer is already interested.",
  },
  {
    label: "Items per transaction",
    body: "Make the second and third piece feel natural instead of pushy.",
  },
  {
    label: "Repeat purchase rate",
    body: "Use purchase history to make future outreach more relevant.",
  },
  {
    label: "Clienteling response",
    body: "Give staff better reasons to reach out when new arrivals land.",
  },
];

const comparison = [
  {
    old: "Staff must remember every customer’s purchases manually.",
    new: "Wardrobe memory keeps a lightweight record of what each customer owns.",
  },
  {
    old: "Outfit recommendations depend on who is working that day.",
    new: "Pairings are available in-store, online, and after purchase.",
  },
  {
    old: "Customer follow-ups often feel generic or sales-heavy.",
    new: "Messages can reference specific pieces the customer already bought.",
  },
  {
    old: "Boutiques lack the data systems of larger retailers.",
    new: "MaisonMatch adds a practical personalization layer on top of existing tools.",
  },
];

const featureRows = [
  {
    number: "01",
    title: "Outfit Completion",
    eyebrow: "From one item to the full look",
    body: "Customers scan or select a single piece and MaisonMatch generates two to three complete shoppable outfits using products currently in stock. Each pairing considers color, texture, silhouette, occasion, seasonality, and the boutique’s own point of view.",
    image: "https://images.unsplash.com/photo-1632469188022-b5db09a70fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwb3V0Zml0JTIwc3R5bGluZyUyMGZsYXRsYXl8ZW58MXx8fHwxNzc5OTQ3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Outfit styling flatlay",
  },
  {
    number: "02",
    title: "Wardrobe Memory",
    eyebrow: "Every purchase becomes useful context",
    body: "After a customer makes a purchase, MaisonMatch remembers what they own. When new arrivals come in, the system finds pieces that match past purchases, giving boutique owners better reasons to send personal follow-ups.",
    image: "https://images.unsplash.com/photo-1603805752838-aa579d77da72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwb3V0Zml0JTIwc3R5bGluZyUyMGZsYXRsYXxZW58MXx8fHwxNzc5OTQ3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Fashion detail layout",
  },
  {
    number: "03",
    title: "Owner Curation",
    eyebrow: "The boutique’s taste stays visible",
    body: "Owners can approve, reject, or refine recommendations before they appear to shoppers. MaisonMatch learns from those edits so the system starts to reflect the store’s styling logic, not a generic fashion feed.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Editorial fashion model",
  },
];

const stackItems = [
  "Live inventory",
  "Visual compatibility",
  "Purchase history",
  "Owner curation",
  "Clienteling prompts",
];

const practicalDetails = [
  {
    title: "No customer app",
    body: "A shopper scans a QR code and instantly sees complete looks. The value appears before any account creation or download.",
  },
  {
    title: "No product re-shoots",
    body: "MaisonMatch can work from existing product imagery and catalog data, so boutiques do not need a new photo operation.",
  },
  {
    title: "Minimal staff training",
    body: "The workflow is built around actions boutique teams already understand: approve, edit, send, and sell.",
  },
  {
    title: "Existing systems first",
    body: "Designed for Shopify, Square, Lightspeed, and existing inventory systems instead of a disruptive rebuild.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] items-end mb-24">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Solution
            </p>
            <h2 className="text-[42px] md:text-[64px] leading-[1.03] tracking-tight">
              Enterprise-level personalization without becoming a technology company
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-foreground/80 max-w-xl md:pb-2">
            Larger retailers use algorithms to recommend complete outfits and remember customer preferences. Independent boutiques deserve the same advantage, but in a form that feels light, curated, and true to the way they already sell.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-px bg-border border border-border mb-28">
          <article className="bg-background p-8 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
                The current gap
              </p>
              <h3 className="text-[34px] md:text-[44px] leading-[1.08] tracking-tight max-w-lg">
                A customer buys one piece. The rest of the outfit stays invisible.
              </h3>
            </div>
            <p className="mt-10 text-[15px] leading-relaxed text-foreground/70 max-w-xl">
              Staff may know what would complete the look, but the recommendation depends on timing, memory, and who happens to be available. Online, the opportunity is even easier to miss.
            </p>
          </article>

          <article className="bg-primary text-primary-foreground p-8 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-primary-foreground/55 mb-6">
                The MaisonMatch layer
              </p>
              <h3 className="text-[34px] md:text-[44px] leading-[1.08] tracking-tight max-w-lg">
                One item becomes a styled, shoppable moment.
              </h3>
            </div>
            <p className="mt-10 text-[15px] leading-relaxed text-primary-foreground/70 max-w-xl">
              MaisonMatch turns the item someone already likes into a complete outfit, then remembers what they bought so future recommendations become more personal over time.
            </p>
          </article>
        </div>

        <div className="space-y-24">
          {featureRows.map((feature, index) => (
            <article
              key={feature.title}
              className={`grid gap-12 md:grid-cols-2 md:items-center ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="border-l border-border pl-8 md:pl-10">
                <p className="text-[48px] md:text-[64px] leading-none tracking-tighter text-accent/50 mb-8">
                  {feature.number}
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">
                  {feature.eyebrow}
                </p>
                <h3 className="text-[34px] md:text-[46px] leading-[1.08] tracking-tight mb-6">
                  {feature.title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/72 max-w-xl">
                  {feature.body}
                </p>
              </div>

              <div className="aspect-[4/5] bg-muted overflow-hidden relative group">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 border border-background/40 m-6 pointer-events-none" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] items-start">
            <div className="md:sticky md:top-28">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                How the intelligence works
              </p>
              <h3 className="text-[38px] md:text-[56px] leading-[1.05] tracking-tight mb-8">
                The AI is practical, not performative.
              </h3>
              <p className="text-[16px] leading-relaxed text-foreground/75 max-w-md">
                MaisonMatch uses visual embeddings, fashion compatibility, and purchase history to understand what belongs together. The owner still gets the final say.
              </p>
            </div>

            <div className="border border-border bg-background p-6 md:p-8">
              <div className="grid gap-px bg-border border border-border mb-8">
                {stackItems.map((item, index) => (
                  <div
                    key={item}
                    className="bg-background grid grid-cols-[70px_1fr] items-center min-h-[72px]"
                  >
                    <span className="text-center text-[13px] tracking-[0.2em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="border-l border-border px-6 text-[18px] tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary text-primary-foreground p-6 min-h-[220px] flex flex-col justify-between">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-primary-foreground/55">
                    Example clienteling note
                  </p>
                  <p className="text-[24px] leading-snug tracking-tight">
                    “This new hoodie pairs perfectly with the jeans you bought last month.”
                  </p>
                </div>
                <div className="border border-border p-6 min-h-[220px] flex flex-col justify-between">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    Owner action
                  </p>
                  <p className="text-[24px] leading-snug tracking-tight">
                    Approve the look, adjust the tone, or swap a piece before it reaches the customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Before / After
            </p>
            <h3 className="text-[38px] md:text-[56px] leading-[1.05] tracking-tight">
              From manual memory to boutique intelligence.
            </h3>
          </div>

          <div className="space-y-4">
            {comparison.map((row) => (
              <div key={row.old} className="grid md:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                    Before
                  </p>
                  <p className="text-[15px] leading-relaxed text-foreground/70">
                    {row.old}
                  </p>
                </div>
                <div className="bg-card p-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                    With MaisonMatch
                  </p>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    {row.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/55 mb-6">
              Built for boutique operations
            </p>
            <h3 className="text-[38px] md:text-[56px] leading-[1.05] tracking-tight">
              A sales tool your team can actually use.
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {practicalDetails.map((detail) => (
              <article key={detail.title} className="bg-primary p-8 min-h-[280px] hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
                <h4 className="text-[24px] tracking-tight mb-6">
                  {detail.title}
                </h4>
                <p className="text-[14px] leading-relaxed opacity-70">
                  {detail.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] items-end mb-14">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Sales impact
            </p>
            <h3 className="text-[38px] md:text-[56px] leading-[1.05] tracking-tight">
              Designed around the numbers boutique owners already care about.
            </h3>
          </div>
          <p className="text-[16px] leading-relaxed text-foreground/72 max-w-xl">
            MaisonMatch is not meant to bury owners in dashboards. It focuses on the moments that move revenue: larger baskets, better follow-ups, and more reasons for customers to come back.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {outcomes.map((outcome) => (
            <article key={outcome.label} className="bg-background p-8 min-h-[240px] hover:bg-card transition-colors">
              <h4 className="text-[22px] leading-tight tracking-tight mb-5">
                {outcome.label}
              </h4>
              <p className="text-[14px] leading-relaxed text-foreground/68">
                {outcome.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
