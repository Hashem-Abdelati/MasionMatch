export default function About() {
  const values = [
    {
      title: "Taste before automation",
      text: "MaisonMatch is built to support a boutique’s eye, not replace it. Owners can approve, reject, and refine recommendations so every suggestion still feels curated.",
    },
    {
      title: "Personalization without friction",
      text: "Customers should not need another app, another login, or another complicated experience. The best interaction is simple: scan, see the look, shop the pieces.",
    },
    {
      title: "Technology that stays quiet",
      text: "The intelligence works in the background, reading inventory, purchase history, and product relationships so staff can focus on styling, selling, and hospitality.",
    },
  ];

  const principles = [
    "Built around existing inventory systems",
    "Designed for independent boutiques, not enterprise chains",
    "Owner-controlled recommendations",
    "Customer memory that supports better clienteling",
    "Elegant enough to live inside a fashion brand",
    "Simple enough for small teams to actually use",
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About Us
            </p>
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight max-w-xl">
              Built for boutiques that refuse to compromise
            </h2>
          </div>

          <div className="space-y-8 pt-8">
            <p className="text-[18px] leading-relaxed text-foreground/80">
              MaisonMatch was created for independent boutiques that want the
              intelligence of modern retail without losing the personal,
              curated identity that makes them special.
            </p>

            <p className="text-[15px] leading-relaxed text-foreground/70">
              Boutique owners already know how to style their customers. They
              know which jacket finishes the look, which color feels right for
              the season, and which customer would love a new arrival before
              anyone else sees it. The problem is not taste. The problem is
              scale, memory, and timing.
            </p>

            <p className="text-[15px] leading-relaxed text-foreground/70">
              MaisonMatch gives that instinct a system. It connects product
              data, live inventory, visual compatibility, and customer purchase
              history so boutiques can recommend complete outfits and follow up
              with customers in ways that feel thoughtful instead of automated.
            </p>

            <div className="pt-8 border-t border-border">
              <p className="text-[15px] tracking-wide text-muted-foreground italic leading-relaxed">
                “The best technology does not announce itself. It simply makes
                good work easier.”
              </p>
            </div>
          </div>
        </div>

        {/* Editorial image row */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1769107805412-90d9191d53e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvciUyMGVsZWdhbnQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTk0NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Boutique detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="aspect-[3/4] bg-muted overflow-hidden md:translate-y-12">
            <img
              src="https://images.unsplash.com/photo-1617178388553-a9d022974a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwb3V0Zml0JTIwc3R5bGluZyUyMGZsYXRsYXl8ZW58MXx8fHwxNzc5OTQ3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fashion styling"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1769107805511-0bb7075fca27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvciUyMGVsZWdhbnQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTk0NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Boutique interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="mt-40 grid md:grid-cols-[0.8fr_1.2fr] gap-20 border-t border-border pt-20">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Point of View
            </p>
            <h3 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight">
              Independent retail does not need to look more corporate.
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-[17px] leading-relaxed text-foreground/80">
              The future of boutique retail should not be a smaller version of
              big-box ecommerce. It should feel more personal, more considered,
              and more connected to the customer.
            </p>

            <p className="text-[15px] leading-relaxed text-foreground/70">
              MaisonMatch exists because independent boutiques deserve the same
              intelligence larger retailers use, but shaped around their
              reality: small teams, live inventory, changing seasonal edits, and
              a brand voice that cannot be flattened into generic
              recommendations.
            </p>

            <p className="text-[15px] leading-relaxed text-foreground/70">
              We are building software that feels like a good shopkeeper: aware
              of what is on the rack, attentive to what a customer already
              owns, and careful enough to suggest only what truly belongs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-32">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              What We Believe
            </p>
            <h3 className="text-[36px] md:text-[48px] leading-[1.1] tracking-tight">
              Software should respect the taste of the people using it.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-t border-border pt-8 space-y-5"
              >
                <h4 className="text-[22px] tracking-tight">{value.title}</h4>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder / team placeholder */}
        <div className="mt-36 grid md:grid-cols-2 gap-16 items-center bg-muted/40 p-8 md:p-12">
          <div className="aspect-[4/5] bg-background border border-border flex items-center justify-center">
            <div className="text-center px-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Founder Image
              </p>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Placeholder for a founder portrait, boutique visit, or editorial
                brand photo.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Why We Started
            </p>
            <h3 className="text-[34px] md:text-[46px] leading-[1.1] tracking-tight mb-8">
              Because boutiques already have the taste. They just need the
              memory.
            </h3>

            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-foreground/70">
                MaisonMatch began with a simple observation: boutique shopping
                works best when someone helps you see the full look. But that
                moment is hard to repeat across every shopper, every product
                page, every fitting room, and every new arrival.
              </p>

              <p className="text-[15px] leading-relaxed text-foreground/70">
                We wanted to build a product that brings that feeling back. Not
                by making fashion colder or more automated, but by helping
                boutiques remember more, suggest better, and sell with the same
                care they already bring to their stores.
              </p>
            </div>
          </div>
        </div>

        {/* Principles list */}
        <div className="mt-32 border-y border-border py-16">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-16">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Product Principles
              </p>
              <h3 className="text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
                What we are building toward
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="border-t border-border pt-4"
                >
                  <p className="text-[15px] leading-relaxed text-foreground/75">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-28 max-w-4xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
            In Short
          </p>
          <h3 className="text-[38px] md:text-[58px] leading-[1.05] tracking-tight">
            MaisonMatch is for boutique owners who want better technology
            without giving up the intimacy, taste, and trust that made their
            shop matter in the first place.
          </h3>
        </div>
      </div>
    </section>
  );
}