import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Clock, CheckCircle, AlertTriangle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DeviceData } from "@/pages/SellDevice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type FinalQuoteProps = {
  deviceData: DeviceData;
  onBack: () => void;
};

const FinalQuote = ({ deviceData, onBack }: FinalQuoteProps) => {
  const navigate = useNavigate();

  const modelName = deviceData.model
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const brandName = deviceData.brand.charAt(0).toUpperCase() + deviceData.brand.slice(1);

  const handleSchedulePickup = () => {
    toast.success("Redirecting to pickup scheduling...", {
      description: "This feature will be available soon!",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Assessment
      </Button>

      {/* Success Header */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Your Quote is Ready! 🎉
        </h1>
        <p className="text-muted-foreground">
          This price is locked for 7 days. No hidden deductions.
        </p>
      </motion.div>

      {/* Price Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-3xl p-8 border border-border shadow-elevated mb-8"
      >
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{brandName}</p>
            <p className="font-bold text-xl text-foreground">{modelName}</p>
            <p className="text-sm text-muted-foreground">
              {deviceData.variant.toUpperCase()} Storage
            </p>
          </div>
        </div>

        <div className="text-center py-6">
          <p className="text-sm text-muted-foreground mb-2">You Get</p>
          <p className="text-5xl md:text-6xl font-bold text-accent">
            ₹{deviceData.finalPrice.toLocaleString()}
          </p>
        </div>

        {/* Price Lock Badge */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Price Locked for 7 Days
            </span>
          </div>
        </div>
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        <div className="bg-card rounded-2xl p-4 border border-border flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">No Deductions</p>
            <p className="text-xs text-muted-foreground">If condition matches</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-4 border border-border flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Instant Payment</p>
            <p className="text-xs text-muted-foreground">Via UPI or Bank</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-4 border border-border flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Data Safety</p>
            <p className="text-xs text-muted-foreground">Certified data wipe</p>
          </div>
        </div>
      </motion.div>

      {/* Data Checklist */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-cta/5 rounded-2xl p-6 border border-cta/20 mb-8"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-foreground mb-2">
              Before Pickup - Data Safety Checklist
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Backup all your photos, videos, and important data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Sign out of all accounts (iCloud, Google, etc.)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Remove SIM card and memory card
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Factory reset your device
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Button
          variant="cta"
          size="xl"
          className="w-full md:w-auto md:px-16"
          onClick={handleSchedulePickup}
        >
          Schedule Free Pickup
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          100% free pickup at your doorstep • Available tomorrow
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalQuote;
