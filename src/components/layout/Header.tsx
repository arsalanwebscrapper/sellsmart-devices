import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, Phone, HelpCircle } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`sticky top-0 z-50 ${isHome ? "bg-primary" : "bg-background border-b border-border"}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isHome ? "bg-background/10" : "bg-primary"}`}>
              <Smartphone className={`w-5 h-5 ${isHome ? "text-background" : "text-primary-foreground"}`} />
            </div>
            <span className={`text-xl font-bold ${isHome ? "text-background" : "text-foreground"}`}>
              SellMyDevice
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/sell"
              className={`font-medium transition-colors ${isHome ? "text-background/80 hover:text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sell Device
            </Link>
            <a
              href="#how-it-works"
              className={`font-medium transition-colors ${isHome ? "text-background/80 hover:text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              How It Works
            </a>
            <a
              href="#"
              className={`font-medium transition-colors ${isHome ? "text-background/80 hover:text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              Track Order
            </a>
          </nav>

          {/* CTA & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm ${isHome ? "text-background/80" : "text-muted-foreground"}`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button variant={isHome ? "hero" : "default"} size="sm" asChild>
              <Link to="/sell">Get Price</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${isHome ? "text-background hover:bg-background/10" : "text-foreground hover:bg-secondary"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${isHome ? "bg-primary border-background/10" : "bg-background border-border"}`}
          >
            <div className="container py-4 space-y-4">
              <Link
                to="/sell"
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium ${isHome ? "text-background" : "text-foreground"}`}
              >
                Sell Device
              </Link>
              <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium ${isHome ? "text-background" : "text-foreground"}`}
              >
                How It Works
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium ${isHome ? "text-background" : "text-foreground"}`}
              >
                Track Order
              </a>
              <div className="pt-4 border-t border-background/10">
                <Button variant={isHome ? "hero" : "default"} className="w-full" asChild>
                  <Link to="/sell" onClick={() => setIsOpen(false)}>
                    Check Your Price
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
