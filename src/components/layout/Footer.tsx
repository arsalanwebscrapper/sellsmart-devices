import { Link } from "react-router-dom";
import { Smartphone, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SellMyDevice</span>
            </Link>
            <p className="text-background/70 text-sm mb-6 leading-relaxed">
              India's most trusted platform to sell old phones, laptops, and tablets. Get the best price with free pickup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sell" className="text-background/70 hover:text-background text-sm transition-colors">
                  Sell Phone
                </Link>
              </li>
              <li>
                <Link to="/sell?category=laptop" className="text-background/70 hover:text-background text-sm transition-colors">
                  Sell Laptop
                </Link>
              </li>
              <li>
                <Link to="/sell?category=tablet" className="text-background/70 hover:text-background text-sm transition-colors">
                  Sell Tablet
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Price List
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Call us at</p>
                  <a href="tel:+919876543210" className="font-semibold hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Email us at</p>
                  <a href="mailto:support@sellmydevice.com" className="font-semibold hover:text-primary transition-colors">
                    support@sellmydevice.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Available in</p>
                  <p className="font-semibold">100+ Cities Across India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 SellMyDevice. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6 opacity-80" />
              <span className="text-background/60 text-sm">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
