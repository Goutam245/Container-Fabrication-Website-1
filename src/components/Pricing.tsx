import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    tagline: "Launch",
    price: "From KSh 450,000",
    features: [
      "20ft container",
      "Basic conversion",
      "Standard finishes",
      "Electrical package",
      "Transport included",
      "3-month warranty",
    ],
    popular: false,
    buttonVariant: "accent" as const,
  },
  {
    name: "Professional Package",
    tagline: "Grow",
    price: "From KSh 1,200,000",
    features: [
      "40ft container",
      "Custom design",
      "Premium finishes",
      "Full electrical & plumbing",
      "Furniture options",
      "Transport & installation",
      "1-year warranty",
    ],
    popular: true,
    buttonVariant: "gold" as const,
  },
  {
    name: "Premium Package",
    tagline: "Transform",
    price: "Custom Quote",
    features: [
      "Multiple containers",
      "Architectural design",
      "Luxury finishes",
      "Smart home integration",
      "Complete furnishing",
      "White-glove service",
      "3-year warranty",
    ],
    popular: false,
    buttonVariant: "goldOutline" as const,
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-midnight-navy relative overflow-hidden">
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
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparent Pricing Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs. All packages include free 3D design, 
            project management, and after-sales support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-gold-glow scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-xs font-heading font-bold rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <span className="text-primary font-heading font-semibold text-sm">
                  {pkg.tagline}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-heading font-bold text-gradient-gold">
                  {pkg.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={pkg.buttonVariant}
                size="lg"
                className="w-full"
              >
                {pkg.popular ? "Choose Professional" : pkg.name.includes("Premium") ? "Discuss Premium" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            All packages include: Free 3D design • Project management • After-sales support
          </p>
          <p className="text-primary text-sm font-medium">
            Flexible payment: 30% deposit, balance on milestones OR credit terms available
          </p>
        </motion.div>
      </div>
    </section>
  );
};
