import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Got ₹14,000 for my old iPhone 11. The price quoted was exactly what I received. Super smooth process!",
    avatar: "RS",
    device: "iPhone 11",
  },
  {
    name: "Priya Patel",
    location: "Bangalore",
    rating: 5,
    text: "Was skeptical at first, but the pickup executive was professional and payment came instantly via UPI.",
    avatar: "PP",
    device: "Samsung S21",
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    rating: 5,
    text: "Best part - no hidden deductions! The condition assessment was fair and transparent.",
    avatar: "AK",
    device: "OnePlus 9 Pro",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 4,
    text: "Sold my MacBook Air here. Free pickup and got paid the same day. Highly recommended!",
    avatar: "SR",
    device: "MacBook Air M1",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by 1 Lakh+ Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-cta fill-cta"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Device badge */}
              <div className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full mb-4">
                Sold: {testimonial.device}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-cta fill-cta" />
              ))}
            </div>
            <span className="text-foreground font-bold">4.8/5</span>
            <span className="text-muted-foreground">based on 50,000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
