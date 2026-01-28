import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Project Timeline",
    traditional: "6-12 months",
    revolution: "4-8 weeks",
    advantage: true,
  },
  {
    feature: "Cost Efficiency",
    traditional: "Standard pricing",
    revolution: "40% savings average",
    advantage: true,
  },
  {
    feature: "Relocatability",
    traditional: "Fixed structure",
    revolution: "Fully relocatable",
    advantage: true,
  },
  {
    feature: "Site Disruption",
    traditional: "Extensive",
    revolution: "Minimal",
    advantage: true,
  },
  {
    feature: "Scalability",
    traditional: "Major renovations",
    revolution: "Modular expansion",
    advantage: true,
  },
  {
    feature: "Environmental Impact",
    traditional: "New materials",
    revolution: "Upcycled containers",
    advantage: true,
  },
];

const benefits = [
  { value: "70%", label: "Faster Completion" },
  { value: "40%", label: "Cost Savings" },
  { value: "100%", label: "Quality Guaranteed" },
  { value: "500+", label: "Projects Delivered" },
];

export const WhyRevolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why 500+ Clients Choose Revolution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how container fabrication compares to traditional construction methods
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={benefit.label} className="text-center">
              <div className="stat-number text-4xl md:text-5xl mb-2">{benefit.value}</div>
              <div className="text-muted-foreground text-sm">{benefit.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-card/80 border-b border-border">
              <div className="font-heading font-semibold text-muted-foreground">
                Feature
              </div>
              <div className="font-heading font-semibold text-muted-foreground text-center">
                Traditional Construction
              </div>
              <div className="font-heading font-semibold text-primary text-center">
                Revolution Containers
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-border/50 hover:bg-card/50 transition-colors"
              >
                <div className="font-medium">{row.feature}</div>
                <div className="text-center flex items-center justify-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive/60" />
                  <span className="text-sm">{row.traditional}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{row.revolution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
