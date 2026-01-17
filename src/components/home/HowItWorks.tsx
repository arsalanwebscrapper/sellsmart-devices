import { motion } from "framer-motion";
import { Smartphone, ClipboardCheck, Banknote, ArrowDown } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Smartphone,
    title: "Select Your Device",
    description: "Choose your phone brand, model, and storage variant",
    color: "bg-primary",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Answer Quick Questions",
    description: "Tell us about your device condition in 2 minutes",
    color: "bg-accent",
  },
  {
    number: 3,
    icon: Banknote,
    title: "Get Paid Instantly",
    description: "Schedule free pickup and receive payment within 24 hours",
    color: "bg-cta",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selling your old device has never been easier. Just 3 simple steps to get the best value.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowDown className="w-6 h-6 text-border animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
