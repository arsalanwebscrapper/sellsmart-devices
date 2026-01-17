import { motion } from "framer-motion";
import { Smartphone, Laptop, Tablet, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "mobile",
    name: "Mobile Phones",
    icon: Smartphone,
    description: "iPhone, Samsung, OnePlus & more",
    popular: true,
    image: "📱",
  },
  {
    id: "laptop",
    name: "Laptops",
    icon: Laptop,
    description: "MacBook, Dell, HP & more",
    popular: false,
    image: "💻",
  },
  {
    id: "tablet",
    name: "Tablets",
    icon: Tablet,
    description: "iPad, Samsung Tab & more",
    popular: false,
    image: "📲",
  },
];

const DeviceCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What do you want to sell?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your device category to get started. We accept all brands and conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/sell?category=${category.id}`)}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border border-border hover:border-primary/20 overflow-hidden"
            >
              {category.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-6xl mb-6">{category.image}</div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>

              <div className="flex items-center text-primary font-semibold">
                Check Price
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceCategories;
