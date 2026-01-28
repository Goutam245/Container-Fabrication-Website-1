import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Eye, FileText } from "lucide-react";

import containerHome from "@/assets/container-home.jpg";
import containerOffice from "@/assets/container-office.jpg";
import containerRetail from "@/assets/container-retail.jpg";
import containerAblution from "@/assets/container-ablution.jpg";
import containerFuel from "@/assets/container-fuel.jpg";
import containerCustom from "@/assets/container-custom.jpg";

const services = [
  {
    image: containerHome,
    category: "Residential",
    title: "Luxury Container Homes",
    description: "Transform shipping containers into breathtaking homes. Custom architectural design, premium finishes, fully furnished options.",
    features: [
      "Full insulation & climate control",
      "Designer interiors included",
      "Move-in ready in 8 weeks",
    ],
    price: "From KSh 1.5M",
  },
  {
    image: containerOffice,
    category: "Commercial",
    title: "Executive Container Offices",
    description: "Mobile workspaces that inspire productivity. Perfect for startups, site offices, or expansion projects.",
    features: [
      "Turnkey IT infrastructure ready",
      "Climate controlled environment",
      "Expandable & relocatable",
    ],
    price: "From KSh 900K",
  },
  {
    image: containerRetail,
    category: "Retail",
    title: "Premium Retail Stalls",
    description: "Launch your retail business with style. Custom branding, electrical installations, security features included.",
    features: [
      "Complete shopfitting",
      "Weatherproof construction",
      "Quick deployment (2 weeks)",
    ],
    price: "From KSh 450K",
  },
  {
    image: containerAblution,
    category: "Sanitation",
    title: "Sanitation & Ablution Blocks",
    description: "Hygienic, durable facilities for construction sites, events, schools. Fully plumbed and certified.",
    features: [
      "Water-efficient fixtures",
      "Easy maintenance design",
      "Relocatable modules",
    ],
    price: "From KSh 650K",
  },
  {
    image: containerFuel,
    category: "Industrial",
    title: "Fuel Station Solutions",
    description: "Complete turnkey fuel retail solutions. From tank installation to forecourt setup, we handle everything.",
    features: [
      "EPRA compliance assured",
      "Safety systems integrated",
      "Ongoing technical support",
    ],
    price: "Custom Pricing",
  },
  {
    image: containerCustom,
    category: "Bespoke",
    title: "Bespoke Fabrication",
    description: "Your imagination, our execution. Custom projects including restaurants, hotels, event spaces, and more.",
    features: [
      "3D visualization before build",
      "Unlimited design possibilities",
      "Project management included",
    ],
    price: "Custom Pricing",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-midnight-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Premium Container Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional container fabrication services 
            tailored to your unique requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-heading font-semibold rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-primary font-heading font-bold text-lg">
                    {service.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button variant="goldOutline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    View Gallery
                  </Button>
                  <Button variant="gold" size="sm" className="flex-1">
                    <FileText className="w-4 h-4 mr-1" />
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
