import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical container project take?",
    answer: "Depending on the complexity, most projects take 4-8 weeks from design approval to delivery. Simple conversions can be completed in as little as 2 weeks, while complex multi-container projects may take 10-12 weeks. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "What sizes of containers do you work with?",
    answer: "We work with all standard container sizes: 10ft, 20ft, and 40ft containers. We can also combine multiple containers to create larger spaces. High-cube containers (9'6\" height) are available for projects requiring extra headroom.",
  },
  {
    question: "Do I need planning permission for a container structure?",
    answer: "It depends on the intended use and location. Temporary structures often don't require permission, but permanent residential or commercial installations typically do. We can guide you through the permit process and handle applications on your behalf.",
  },
  {
    question: "Can containers be connected to create larger spaces?",
    answer: "Absolutely! We specialize in multi-container configurations. Containers can be placed side-by-side, stacked, or arranged in creative configurations. We reinforce all connection points and ensure structural integrity.",
  },
  {
    question: "What payment options do you offer?",
    answer: "We offer flexible payment plans: typically 30% deposit to begin, 40% at mid-point, and 30% upon completion. We also offer financing options for qualified projects. Credit terms can be arranged for corporate clients.",
  },
  {
    question: "How do you deliver and install the container?",
    answer: "We handle all logistics nationwide. Containers are delivered by flatbed truck and positioned using crane or forklift depending on site access. Our team manages the entire process, including site preparation requirements.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Our standard warranty covers 1 year on workmanship and materials. Premium packages include extended 3-year warranties. The container structure itself comes with a 10-year structural warranty against corrosion and defects.",
  },
  {
    question: "Are container buildings insulated and weatherproof?",
    answer: "Yes, all our conversions include professional insulation and weatherproofing. We use high-quality spray foam or panel insulation, and all openings are sealed to prevent water ingress. Climate control options are available for all projects.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our container fabrication services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-card border border-primary/30"
                    : "bg-card/50 border border-border/50 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-left">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm mt-4 pl-12">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
