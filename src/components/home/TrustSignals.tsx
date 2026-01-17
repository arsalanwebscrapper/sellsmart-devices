import { motion } from "framer-motion";
import { ShieldCheck, Lock, RefreshCw, Star, Truck, CreditCard } from "lucide-react";

const signals = [
  {
    icon: Lock,
    title: "Price Lock Guarantee",
    description: "Your quoted price is locked for 7 days. No surprises.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Deductions",
    description: "Transparent pricing. What you see is what you get.",
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Secure Data Wipe",
    description: "Military-grade data erasure. Your privacy is protected.",
    highlight: false,
  },
  {
    icon: Truck,
    title: "Free Doorstep Pickup",
    description: "Our executive comes to you. No travel needed.",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Instant Payment",
    description: "Get paid via UPI or bank transfer within minutes.",
    highlight: false,
  },
  {
    icon: Star,
    title: "4.8★ Customer Rating",
    description: "Trusted by 1 Lakh+ happy customers across India.",
    highlight: false,
  },
];

const TrustSignals = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sell with Confidence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've built trust with lakhs of customers through transparency and reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                signal.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card border border-border hover:shadow-card"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  signal.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <signal.icon
                  className={`w-6 h-6 ${
                    signal.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              <h3
                className={`text-lg font-bold mb-2 ${
                  signal.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {signal.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  signal.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
