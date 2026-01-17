import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will the price change after pickup?",
    answer:
      "No! Our Price Lock Guarantee ensures that if your device matches the condition you described, you receive the exact quoted price. We're completely transparent about this.",
  },
  {
    question: "When do I receive payment?",
    answer:
      "You receive instant payment via UPI or bank transfer as soon as our pickup executive verifies your device. The entire process takes just 5-10 minutes.",
  },
  {
    question: "Is the pickup really free?",
    answer:
      "Yes, absolutely! We offer free doorstep pickup in 100+ cities across India. Our executive will come to your location at your chosen time slot.",
  },
  {
    question: "How do you ensure my data is safe?",
    answer:
      "We perform a military-grade data wipe on all devices using certified software. We provide a data erasure certificate for your peace of mind.",
  },
  {
    question: "What if my device has damages?",
    answer:
      "We accept devices in any condition! During the assessment, you'll see exactly how each issue affects the price - no hidden deductions.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We currently offer pickup services in 100+ major cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and more.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about selling your device.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
