import { Link } from "react-router";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Every piece finds its match
            </p>
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight">
              Outfit intelligence for independent boutiques
            </h1>
          </div>

          <p className="text-[17px] leading-relaxed text-foreground/80 max-w-md">
            Turn single items into complete shoppable outfits. Build stronger customer relationships with wardrobe memory that matches new arrivals to past purchases.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              to="/demo"
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-[13px] tracking-wide"
            >
              Request a Demo
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-3 border border-border hover:bg-muted transition-colors text-[13px] tracking-wide"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvciUyMGVsZWdhbnQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTk0NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Boutique interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/60 to-transparent p-8">
            <p className="text-primary-foreground text-[11px] tracking-[0.2em] uppercase">
              Built for boutiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
