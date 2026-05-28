export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect inventory",
      description:
        "Link your existing POS, ecommerce platform, or product catalog. MaisonMatch works with Shopify, Square, Lightspeed, and custom inventory systems.",
      detail:
        "We read product names, categories, colors, imagery, sizes, availability, pricing, and product metadata so recommendations are built only from pieces you can actually sell.",
    },
    {
      number: "02",
      title: "Generate outfit pairings",
      description:
        "MaisonMatch analyzes your inventory and creates complete outfit combinations based on visual compatibility, color, texture, silhouette, season, and occasion.",
      detail:
        "A single jacket can become a weekday look, a dinner look, and a relaxed weekend look, each using products already available in your boutique.",
    },
    {
      number: "03",
      title: "Launch QR codes in-store or online",
      description:
        "Add QR codes to product tags, mirrors, fitting rooms, receipts, or product pages. Customers scan one item and instantly see complete outfit suggestions.",
      detail:
        "No app download. No complicated customer setup. The experience feels like an extension of your boutique, not a separate technology product.",
    },
    {
      number: "04",
      title: "Track sales impact and repeat purchases",
      description:
        "See which outfit pairings drive add-ons, repeat visits, and clienteling conversations. MaisonMatch helps owners understand what is actually working.",
      detail:
        "Track average transaction value, items per transaction, recommendation engagement, and wardrobe memory matches that bring customers back.",
    },
  ];

  const touchpoints = [
    {
      title: "On the product tag",
      text: "A shopper scans the tag on a dress and sees shoes, jewelry, and outerwear that complete the look.",
    },
    {
      title: "In the fitting room",
      text: "Staff can show recommended pairings without leaving the customer waiting or searching the sales floor.",
    },
    {
      title: "On the product page",
      text: "Online shoppers see styled combinations instead of isolated products sitting alone in a grid.",
    },
    {
      title: "After purchase",
      text: "New arrivals can be matched to what the customer already owns, making follow-up messages feel specific.",
    },
  ];

  const behindTheScenes = [
    "Product imagery",
    "Live inventory",
    "Color relationships",
    "Texture and fabric cues",
    "Silhouette balance",
    "Occasion logic",
    "Purchase history",
    "Owner-approved taste rules",
  ];

  const metrics = [
    {
      label: "Basket size",
      description: "Measure whether customers are adding more pieces to each purchase.",
    },
    {
      label: "Pairing engagement",
      description: "See which outfit combinations customers view, save, or shop from.",
    },
    {
      label: "Repeat purchase signals",
      description: "Track when past purchases lead to interest in new arrivals.",
    },
    {
      label: "Clienteling response",
      description: "Understand which personalized messages bring customers back.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Intro */}
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-20 items-end mb-24">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              How It Works
            </p>
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight">
              Four steps to smarter selling
            </h2>
          </div>

          <p className="text-[17px] leading-relaxed text-foreground/75 max-w-2xl">
            MaisonMatch is designed to fit inside the way boutiques already
            operate. It connects to inventory, builds outfit recommendations,
            launches through simple customer touchpoints, and helps owners see
            which pairings turn interest into revenue.
          </p>
        </div>

        {/* Step grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-border pt-8 grid grid-cols-[72px_1fr] gap-8"
            >
              <div className="text-[48px] leading-none tracking-tighter text-accent opacity-40">
                {step.number}
              </div>

              <div>
                <h3 className="text-[24px] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/75 mb-5">
                  {step.description}
                </p>
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual section */}
        <div className="mt-32 pt-20 border-t border-border">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1753029226995-74b05a344bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvciUyMGVsZWdhbnQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTk0NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern boutique"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Customer Experience
                </p>
                <h3 className="text-[34px] md:text-[46px] leading-[1.1] tracking-tight mb-6">
                  From one item to a complete look, without breaking the shopping moment
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  A customer does not need to understand the system. They simply
                  scan the piece they already like and see what belongs with it.
                  The experience feels natural because it mirrors what a great
                  stylist or shop owner would do in person.
                </p>
              </div>

              <div className="border border-border bg-background p-6">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Example scan
                </p>
                <p className="text-[24px] tracking-tight mb-4">
                  Linen vest selected
                </p>
                <div className="space-y-3 text-[14px] text-foreground/70">
                  <div className="flex justify-between border-t border-border pt-3">
                    <span>Look 01</span>
                    <span>Tailored trouser + mule + gold hoop</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span>Look 02</span>
                    <span>Column skirt + woven tote + sandal</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span>Look 03</span>
                    <span>Wide denim + silk scarf + loafer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div className="mt-36">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Where It Lives
            </p>
            <h3 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight">
              Built for the real places customers make decisions
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {touchpoints.map((touchpoint) => (
              <div
                key={touchpoint.title}
                className="border border-border bg-background p-6 min-h-[220px] flex flex-col justify-between"
              >
                <h4 className="text-[22px] tracking-tight">
                  {touchpoint.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-foreground/65 mt-8">
                  {touchpoint.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the scenes */}
        <div className="mt-36 grid md:grid-cols-[0.9fr_1.1fr] gap-20 items-start border-t border-border pt-20">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Behind the Scenes
            </p>
            <h3 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight mb-6">
              Technology that stays invisible
            </h3>
            <p className="text-[15px] leading-relaxed text-foreground/70">
              MaisonMatch uses visual embeddings, fashion logic, and learned
              compatibility to recommend outfits. But your customers never see
              algorithms or dashboards. They only see beautiful, relevant
              pairings that feel hand-curated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {behindTheScenes.map((item) => (
              <div
                key={item}
                className="border border-border px-5 py-4 text-[14px] text-foreground/75 bg-background"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Owner control */}
        <div className="mt-32 bg-muted/40 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Owner Control
              </p>
              <h3 className="text-[34px] md:text-[46px] leading-[1.1] tracking-tight mb-6">
                The system learns. The boutique still leads.
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground/70 mb-6">
                MaisonMatch does not assume that all recommendations are equal.
                Boutique owners can approve, reject, or refine outfit pairings
                so the system respects the shop’s point of view.
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/70">
                Over time, those decisions help MaisonMatch understand what
                belongs inside your brand and what does not.
              </p>
            </div>

            <div className="border border-border bg-background">
              <div className="border-b border-border px-6 py-4">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  Recommendation review
                </p>
              </div>

              <div className="divide-y divide-border">
                {[
                  {
                    item: "Cream ribbed tank + silk midi skirt",
                    status: "Approved",
                  },
                  {
                    item: "Leather bomber + linen trouser",
                    status: "Refine",
                  },
                  {
                    item: "Floral mini dress + chunky sneaker",
                    status: "Reject",
                  },
                ].map((pairing) => (
                  <div
                    key={pairing.item}
                    className="px-6 py-5 flex items-center justify-between gap-6"
                  >
                    <p className="text-[14px] text-foreground/75">
                      {pairing.item}
                    </p>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      {pairing.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Measurement */}
        <div className="mt-36">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-20 mb-14">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Measurement
              </p>
              <h3 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight">
                Know what is helping customers buy the full look
              </h3>
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/70 pt-4">
              The goal is not to bury boutique owners in analytics. MaisonMatch
              focuses on the signals that actually matter: whether customers
              engage with recommendations, add more pieces, return for new
              arrivals, and respond to personalized outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-t border-border pt-6"
              >
                <h4 className="text-[22px] tracking-tight mb-4">
                  {metric.label}
                </h4>
                <p className="text-[14px] leading-relaxed text-foreground/65">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-36 border-y border-border py-20">
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              In Practice
            </p>
            <h3 className="text-[38px] md:text-[58px] leading-[1.05] tracking-tight">
              MaisonMatch turns inventory into styled moments, purchases into
              memory, and new arrivals into reasons to come back.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}