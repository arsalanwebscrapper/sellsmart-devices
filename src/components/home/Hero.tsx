import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Smartphone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative gradient-hero min-h-[85vh] flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full text-background/90 text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Trusted by 1 Lakh+ customers
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-background mb-6 leading-tight">
              Sell Your Old Phone
              <span className="block text-accent">in 2 Minutes</span>
            </h1>

            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Get the best price for your old devices. Free pickup, instant payment, and secure data wipe guaranteed.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-background/90 text-sm">
                <Truck className="w-5 h-5" />
                <span>Free Pickup</span>
              </div>
              <div className="flex items-center gap-2 text-background/90 text-sm">
                <Shield className="w-5 h-5" />
                <span>Secure Data Wipe</span>
              </div>
              <div className="flex items-center gap-2 text-background/90 text-sm">
                <Smartphone className="w-5 h-5" />
                <span>All Brands Accepted</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/sell")}
                className="group"
              >
                Check Your Price
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works
              </Button>
            </div>
          </motion.div>

          {/* Right content - Phone illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Floating phone mockup */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-64 h-[500px] bg-background/10 backdrop-blur-md rounded-[3rem] border-4 border-background/20 p-3 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-10 h-10 text-accent" />
                      </div>
                      <p className="text-2xl font-bold text-primary mb-2">₹12,500</p>
                      <p className="text-muted-foreground text-sm">Best Price Guaranteed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-8 bg-background rounded-xl p-3 shadow-elevated"
              >
                <p className="text-xs text-muted-foreground">Price Locked</p>
                <p className="text-lg font-bold text-accent">7 Days</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-background rounded-xl p-3 shadow-elevated"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Data</p>
                    <p className="text-sm font-bold text-foreground">100% Safe</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
