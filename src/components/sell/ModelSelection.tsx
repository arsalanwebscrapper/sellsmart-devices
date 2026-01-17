import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Model = {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  popular: boolean;
};

const modelsByBrand: Record<string, Model[]> = {
  apple: [
    { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", basePrice: 85000, image: "📱", popular: true },
    { id: "iphone-15-pro", name: "iPhone 15 Pro", basePrice: 75000, image: "📱", popular: true },
    { id: "iphone-15", name: "iPhone 15", basePrice: 55000, image: "📱", popular: true },
    { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", basePrice: 65000, image: "📱", popular: true },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", basePrice: 55000, image: "📱", popular: false },
    { id: "iphone-14", name: "iPhone 14", basePrice: 45000, image: "📱", popular: false },
    { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", basePrice: 50000, image: "📱", popular: false },
    { id: "iphone-13-pro", name: "iPhone 13 Pro", basePrice: 42000, image: "📱", popular: false },
    { id: "iphone-13", name: "iPhone 13", basePrice: 35000, image: "📱", popular: false },
    { id: "iphone-12", name: "iPhone 12", basePrice: 25000, image: "📱", popular: false },
    { id: "iphone-11", name: "iPhone 11", basePrice: 18000, image: "📱", popular: false },
  ],
  samsung: [
    { id: "galaxy-s24-ultra", name: "Galaxy S24 Ultra", basePrice: 75000, image: "📱", popular: true },
    { id: "galaxy-s24-plus", name: "Galaxy S24+", basePrice: 60000, image: "📱", popular: true },
    { id: "galaxy-s24", name: "Galaxy S24", basePrice: 50000, image: "📱", popular: true },
    { id: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", basePrice: 55000, image: "📱", popular: true },
    { id: "galaxy-z-fold-5", name: "Galaxy Z Fold 5", basePrice: 80000, image: "📱", popular: false },
    { id: "galaxy-z-flip-5", name: "Galaxy Z Flip 5", basePrice: 45000, image: "📱", popular: false },
    { id: "galaxy-a54", name: "Galaxy A54", basePrice: 20000, image: "📱", popular: false },
    { id: "galaxy-a34", name: "Galaxy A34", basePrice: 15000, image: "📱", popular: false },
  ],
  oneplus: [
    { id: "oneplus-12", name: "OnePlus 12", basePrice: 45000, image: "📱", popular: true },
    { id: "oneplus-12r", name: "OnePlus 12R", basePrice: 30000, image: "📱", popular: true },
    { id: "oneplus-11", name: "OnePlus 11", basePrice: 35000, image: "📱", popular: true },
    { id: "oneplus-nord-4", name: "OnePlus Nord 4", basePrice: 22000, image: "📱", popular: false },
    { id: "oneplus-nord-ce-4", name: "OnePlus Nord CE 4", basePrice: 18000, image: "📱", popular: false },
    { id: "oneplus-10-pro", name: "OnePlus 10 Pro", basePrice: 28000, image: "📱", popular: false },
    { id: "oneplus-9-pro", name: "OnePlus 9 Pro", basePrice: 22000, image: "📱", popular: false },
  ],
  xiaomi: [
    { id: "xiaomi-14", name: "Xiaomi 14", basePrice: 45000, image: "📱", popular: true },
    { id: "xiaomi-13-pro", name: "Xiaomi 13 Pro", basePrice: 35000, image: "📱", popular: true },
    { id: "redmi-note-13-pro", name: "Redmi Note 13 Pro+", basePrice: 18000, image: "📱", popular: true },
    { id: "redmi-note-13", name: "Redmi Note 13", basePrice: 12000, image: "📱", popular: false },
    { id: "poco-f6", name: "POCO F6", basePrice: 22000, image: "📱", popular: false },
    { id: "poco-x6-pro", name: "POCO X6 Pro", basePrice: 18000, image: "📱", popular: false },
  ],
  vivo: [
    { id: "vivo-x100-pro", name: "Vivo X100 Pro", basePrice: 50000, image: "📱", popular: true },
    { id: "vivo-x100", name: "Vivo X100", basePrice: 40000, image: "📱", popular: true },
    { id: "vivo-v30-pro", name: "Vivo V30 Pro", basePrice: 28000, image: "📱", popular: false },
    { id: "vivo-v30", name: "Vivo V30", basePrice: 22000, image: "📱", popular: false },
    { id: "iqoo-12", name: "iQOO 12", basePrice: 35000, image: "📱", popular: false },
  ],
  oppo: [
    { id: "oppo-find-x7", name: "OPPO Find X7", basePrice: 55000, image: "📱", popular: true },
    { id: "oppo-reno-11-pro", name: "OPPO Reno 11 Pro", basePrice: 30000, image: "📱", popular: true },
    { id: "oppo-reno-11", name: "OPPO Reno 11", basePrice: 25000, image: "📱", popular: false },
    { id: "oppo-f25-pro", name: "OPPO F25 Pro", basePrice: 18000, image: "📱", popular: false },
  ],
};

type ModelSelectionProps = {
  brand: string;
  selectedModel: string;
  onSelect: (model: string, basePrice: number) => void;
  onBack: () => void;
};

const ModelSelection = ({ brand, selectedModel, onSelect, onBack }: ModelSelectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const models = modelsByBrand[brand] || [];
  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularModels = filteredModels.filter((m) => m.popular);
  const otherModels = filteredModels.filter((m) => !m.popular);

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Brands
      </Button>

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Select Your {brandName} Model
        </h1>
        <p className="text-muted-foreground">
          Choose the model you want to sell
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search model..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 text-lg rounded-xl bg-card border-border"
        />
      </div>

      {/* Popular Models */}
      {popularModels.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-cta" />
            Popular Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularModels.map((model, index) => (
              <motion.button
                key={model.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelect(model.id, model.basePrice)}
                className={`bg-card border-2 rounded-2xl p-4 flex items-center gap-4 transition-all hover:shadow-card hover:border-primary/30 text-left ${
                  selectedModel === model.id
                    ? "border-primary shadow-card"
                    : "border-border"
                }`}
              >
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-3xl">
                  {model.image}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{model.name}</p>
                  <p className="text-accent font-bold text-lg">
                    Up to ₹{model.basePrice.toLocaleString()}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Other Models */}
      {otherModels.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            All Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherModels.map((model, index) => (
              <motion.button
                key={model.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelect(model.id, model.basePrice)}
                className={`bg-card border-2 rounded-2xl p-4 flex items-center gap-4 transition-all hover:shadow-card hover:border-primary/30 text-left ${
                  selectedModel === model.id
                    ? "border-primary shadow-card"
                    : "border-border"
                }`}
              >
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-3xl">
                  {model.image}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{model.name}</p>
                  <p className="text-accent font-bold text-lg">
                    Up to ₹{model.basePrice.toLocaleString()}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {filteredModels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No models found matching "{searchQuery}"</p>
        </div>
      )}
    </motion.div>
  );
};

export default ModelSelection;
