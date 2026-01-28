import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Ruler, Wrench, Truck } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Design",
    duration: "Days 1-5",
    description: "We begin with understanding your vision through a comprehensive consultation process.",
    steps: [
      "Initial consultation (free, no obligation)",
      "Site assessment if needed",
      "3D concept design & renderings",
      "Material selection & specifications",
      "Detailed quotation breakdown",
    ],
  },
  {
    number: "02",
    icon: Ruler,
    title: "Agreement & Preparation",
    duration: "Days 6-7",
    description: "Once designs are approved, we formalize the project and prepare for production.",
    steps: [
      "Contract signing with clear terms",
      "Payment plan setup (flexible options)",
      "Permits & approvals (we handle)",
      "Material procurement begins",
      "Production slot scheduled",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fabrication & Quality Control",
    duration: "Weeks 2-6",
    description: "Our skilled craftsmen bring your vision to life with precision and attention to detail.",
    steps: [
      "Container selection & preparation",
      "Cutting, welding, structural work",
      "Electrical & plumbing installation",
      "Interior finishing & painting",
      "Multi-point quality inspection",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivery & Installation",
    duration: "Days 1-3",
    description: "We handle logistics and ensure your container is perfectly installed at your site.",
    steps: [
      "Nationwide transport arranged",
      "Crane/forklift deployment",
      "Professional installation & setup",
      "Final walkthrough & handover",
      "Warranty documentation activated",
    ],
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
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
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Revolution Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first call to the final handover, we've streamlined every step 
            to deliver excellence with complete transparency.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 transform md:-translate-x-1/2" />

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-gold z-10 mt-8" />

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className="card-premium p-6 cursor-pointer"
                    onClick={() =>
                      setExpandedPhase(expandedPhase === index ? null : index)
                    }
                  >
                    {/* Phase Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-heading font-bold text-gradient-gold">
                        {phase.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title & Duration */}
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold mb-1">
                        {phase.title}
                      </h3>
                      <span className="text-primary text-sm font-heading font-medium">
                        {phase.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {phase.description}
                    </p>

                    {/* Expandable Steps */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedPhase === index ? "auto" : 0,
                        opacity: expandedPhase === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pt-4 border-t border-border">
                        {phase.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Expand Indicator */}
                    <div className="text-primary text-xs mt-4 flex items-center gap-1">
                      {expandedPhase === index ? "Click to collapse" : "Click to expand"}
                    </div>
                  </div>
                </div>

                {/* Empty Space for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
