import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-bright-gold to-primary relative overflow-hidden">
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2"
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80"
            >
              Join 500+ satisfied clients. Get your free quote today.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-midnight-navy text-foreground hover:bg-midnight-navy/90"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Button>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 pt-8 border-t border-primary-foreground/20"
        >
          {["ISO Certified", "Fully Insured", "Licensed Contractor"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-primary-foreground/80 text-sm"
            >
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
