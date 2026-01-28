import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Award, Users, Truck, HeartHandshake } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";

const differentiators = [
  { icon: Award, title: "ISO Certified Quality" },
  { icon: Users, title: "In-house Design Team" },
  { icon: Truck, title: "Nationwide Delivery" },
  { icon: HeartHandshake, title: "Lifetime Support" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={workshopImg}
                alt="Revolution Containers Workshop"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-8 glass-gold rounded-2xl p-6 max-w-xs"
            >
              <div className="text-primary font-heading font-bold text-lg mb-1">
                Kenya's #1 Container Specialists
              </div>
              <div className="text-muted-foreground text-sm">
                Since 2010
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Revolution
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gold-accent pb-6">
              Where Innovation Meets Craftsmanship
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                At Revolution Containers & Fabricators, we don't just build containers — we engineer possibilities. 
                For over 15 years, we've been transforming ordinary shipping containers into extraordinary spaces 
                that redefine what's possible in modern construction.
              </p>
              <p>
                Our state-of-the-art facility in Nairobi's Industrial Area houses the latest fabrication technology, 
                operated by master craftsmen who share our passion for perfection. Every cut, weld, and finish 
                reflects our unwavering commitment to quality.
              </p>
              <p>
                From luxury homes to bustling retail spaces, from remote site offices to innovative restaurants, 
                we've delivered over 500 projects across Kenya — each one a testament to our expertise and dedication.
              </p>
            </div>

            {/* Differentiators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg">
              Learn Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
