import { motion } from "framer-motion";
import { ArrowLeft, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

type Variant = {
  id: string;
  storage: string;
  priceModifier: number;
};

const variants: Variant[] = [
  { id: "64gb", storage: "64 GB", priceModifier: 0.7 },
  { id: "128gb", storage: "128 GB", priceModifier: 0.85 },
  { id: "256gb", storage: "256 GB", priceModifier: 1.0 },
  { id: "512gb", storage: "512 GB", priceModifier: 1.15 },
  { id: "1tb", storage: "1 TB", priceModifier: 1.3 },
];

type VariantSelectionProps = {
  brand: string;
  model: string;
  selectedVariant: string;
  basePrice: number;
  onSelect: (variant: string, adjustedPrice: number) => void;
  onBack: () => void;
};

const VariantSelection = ({
  brand,
  model,
  selectedVariant,
  basePrice,
  onSelect,
  onBack,
}: VariantSelectionProps) => {
  const modelName = model
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Models
      </Button>

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Select Storage Variant
        </h1>
        <p className="text-muted-foreground">
          Choose the storage capacity of your {modelName}
        </p>
      </div>

      <div className="space-y-4">
        {variants.map((variant, index) => {
          const adjustedPrice = Math.round(basePrice * variant.priceModifier);
          return (
            <motion.button
              key={variant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(variant.id, adjustedPrice)}
              className={`w-full bg-card border-2 rounded-2xl p-5 flex items-center justify-between transition-all hover:shadow-card hover:border-primary/30 ${
                selectedVariant === variant.id
                  ? "border-primary shadow-card"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <HardDrive className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg text-foreground">
                    {variant.storage}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Internal Storage
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">
                  ₹{adjustedPrice.toLocaleString()}
                </p>
                <p className="text-muted-foreground text-xs">Get up to</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-6">
        💡 Not sure about storage? Check Settings → General → About on your device
      </p>
    </motion.div>
  );
};

export default VariantSelection;
