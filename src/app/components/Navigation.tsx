import { Link, NavLink } from "react-router";

const navItems = [
  { label: "Solution", to: "/solution" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="tracking-tight">
          <span className="text-[15px] tracking-[0.2em] uppercase">MaisonMatch</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[13px] tracking-wide transition-colors ${
                  isActive ? "text-accent" : "hover:text-accent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/demo"
            className={({ isActive }) =>
              `text-[13px] tracking-wide px-6 py-2 transition-colors ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`
            }
          >
            Request Demo
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
