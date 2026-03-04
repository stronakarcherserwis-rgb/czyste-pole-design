import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
  { label: "O nas", href: "#o-nas" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" }];


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex items-center justify-end gap-6 py-2 px-4 text-sm">
          <a href="tel:+48158221221" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +48 15 822 12 21
          </a>
          <a href="mailto:biuro@karcherserwis.pl" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>biuro@karcherserwis.pl</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="font-heading text-2xl font-900 tracking-tight">
            <span className="text-primary bg-primary px-2 py-1 text-primary-foreground font-extrabold">  KARCHERSERWIS  </span>
            <span className="ml-2 font-bold text-foreground"></span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
            <li key={item.href}>
                <a
                href={item.href}
                className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                
                  {item.label}
                </a>
              </li>
            )}
          </ul>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen &&
        <div className="md:hidden bg-background border-t border-border">
            <ul className="flex flex-col py-4">
              {navItems.map((item) =>
            <li key={item.href}>
                  <a
                href={item.href}
                className="block px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(false)}>
                
                    {item.label}
                  </a>
                </li>
            )}
            </ul>
          </div>
        }
      </nav>
    </header>);

};

export default Header;