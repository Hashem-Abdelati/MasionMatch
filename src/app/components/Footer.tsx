import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-[15px] tracking-[0.2em] uppercase">
                MaisonMatch
              </Link>
            </div>
            <p className="text-[13px] leading-relaxed text-foreground/60 max-w-sm">
              Every piece finds its match. AI-powered outfit recommendations for independent fashion boutiques.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Product
            </h4>
            <div className="space-y-3">
              <Link to="/solution" className="block text-[13px] hover:text-accent transition-colors">
                Solution
              </Link>
              <Link to="/how-it-works" className="block text-[13px] hover:text-accent transition-colors">
                How It Works
              </Link>
              <Link to="/demo" className="block text-[13px] hover:text-accent transition-colors">
                Request Demo
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Company
            </h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-[13px] hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/demo" className="block text-[13px] hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-wide text-muted-foreground">
            © 2026 MaisonMatch. Built for boutiques that refuse to compromise.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] tracking-wide text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[11px] tracking-wide text-muted-foreground hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
