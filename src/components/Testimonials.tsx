import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO, TechStart Kenya",
    company: "TechStart Kenya",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Revolution Containers transformed our vision into reality. Our container office complex is not just functional – it's a statement. The team's attention to detail and professionalism exceeded our expectations.",
    project: "6-Container Office Complex",
  },
  {
    name: "Sarah Wanjiku",
    role: "Founder",
    company: "Nairobi Boutique Hotel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "We needed unique accommodation units that would stand out. Revolution delivered 10 stunning container rooms that our guests absolutely love. The ROI has been incredible.",
    project: "Boutique Hotel Rooms",
  },
  {
    name: "Peter Ochieng",
    role: "Operations Director",
    company: "BuildRight Construction",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "For our remote construction sites, we needed durable, quality accommodation fast. Revolution delivered 20 units in record time. Their logistics team handled everything perfectly.",
    project: "Site Camp (20 Units)",
  },
  {
    name: "Grace Njeri",
    role: "Owner",
    company: "Urban Eats Restaurant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our container restaurant has become the talk of Westlands! The design is unique, the build quality is exceptional, and customers love the industrial-chic vibe.",
    project: "Container Restaurant",
  },
  {
    name: "David Kimani",
    role: "Managing Partner",
    company: "Mombasa Retail Group",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "We opened 15 container retail stalls in just 3 weeks. The speed and quality from Revolution allowed us to capture the market before our competition even broke ground.",
    project: "Retail Market (15 Stalls)",
  },
  {
    name: "Dr. Amina Hassan",
    role: "Director",
    company: "Rural Health Initiative",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our mobile clinic serves remote communities across Kenya. Revolution built us a fully-equipped medical facility that can be transported anywhere. They truly understood our mission.",
    project: "Mobile Medical Clinic",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses and individuals 
            who have transformed their spaces with Revolution.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium p-6"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Project Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-heading font-medium rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
