import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Brand = {
  id: string;
  name: string;
  logo: string;
  popular: boolean;
};

const mobileBrands: Brand[] = [
  { id: "apple", name: "Apple", logo: "🍎", popular: true },
  { id: "samsung", name: "Samsung", logo: "📱", popular: true },
  { id: "oneplus", name: "OnePlus", logo: "🔴", popular: true },
  { id: "xiaomi", name: "Xiaomi", logo: "🟠", popular: true },
  { id: "vivo", name: "Vivo", logo: "🔵", popular: true },
  { id: "oppo", name: "OPPO", logo: "🟢", popular: true },
  { id: "realme", name: "Realme", logo: "🟡", popular: false },
  { id: "google", name: "Google", logo: "🔍", popular: false },
  { id: "motorola", name: "Motorola", logo: "Ⓜ️", popular: false },
  { id: "nothing", name: "Nothing", logo: "⚫", popular: false },
  { id: "asus", name: "Asus", logo: "🎮", popular: false },
  { id: "nokia", name: "Nokia", logo: "📞", popular: false },
];

type BrandSelectionProps = {
  category: string;
  selectedBrand: string;
  onSelect: (brand: string) => void;
};

const BrandSelection = ({ category, selectedBrand, onSelect }: BrandSelectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const brands = mobileBrands; // Can extend for laptop/tablet

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularBrands = filteredBrands.filter((brand) => brand.popular);
  const otherBrands = filteredBrands.filter((brand) => !brand.popular);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Select Your Phone Brand
        </h1>
        <p className="text-muted-foreground">
          Choose the brand of the device you want to sell
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 text-lg rounded-xl bg-card border-border"
        />
      </div>

      {/* Popular Brands */}
      {popularBrands.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Popular Brands
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {popularBrands.map((brand, index) => (
              <motion.button
                key={brand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelect(brand.id)}
                className={`bg-card border-2 rounded-2xl p-4 md:p-6 text-center transition-all hover:shadow-card hover:border-primary/30 ${
                  selectedBrand === brand.id
                    ? "border-primary shadow-card"
                    : "border-border"
                }`}
              >
                <div className="text-4xl md:text-5xl mb-2">{brand.logo}</div>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {brand.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Other Brands */}
      {otherBrands.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Other Brands
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {otherBrands.map((brand, index) => (
              <motion.button
                key={brand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelect(brand.id)}
                className={`bg-card border-2 rounded-2xl p-4 md:p-6 text-center transition-all hover:shadow-card hover:border-primary/30 ${
                  selectedBrand === brand.id
                    ? "border-primary shadow-card"
                    : "border-border"
                }`}
              >
                <div className="text-4xl md:text-5xl mb-2">{brand.logo}</div>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {brand.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {filteredBrands.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No brands found matching "{searchQuery}"</p>
        </div>
      )}
    </motion.div>
  );
};

export default BrandSelection;
