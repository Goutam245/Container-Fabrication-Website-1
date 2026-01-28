import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Container Homes", href: "#" },
    { name: "Offices & Workspaces", href: "#" },
    { name: "Retail Stalls", href: "#" },
    { name: "Ablution Blocks", href: "#" },
    { name: "Fuel Stations", href: "#" },
    { name: "Custom Projects", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Process", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "FAQs", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Payment Options", href: "#" },
    { name: "Warranty Info", href: "#" },
    { name: "Download Brochure", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-midnight-navy pt-20 pb-8 relative">
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-bright-gold rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-xl">R</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Revolution</span>
                <span className="text-primary text-xs block font-heading">Containers & Fabricators</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Kenya's premier container fabrication company, transforming shipping containers 
              into stunning homes, offices, and commercial spaces since 2010.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+254 700 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@revolutioncontainers.co.ke"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@revolutioncontainers.co.ke</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Industrial Area, Nairobi, Kenya</span>
              </li>
            </ul>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-card/30 rounded-lg">
              <div className="text-xs text-muted-foreground">Office Hours</div>
              <div className="text-sm mt-1">Mon - Fri: 8AM - 6PM</div>
              <div className="text-sm">Sat: 9AM - 2PM</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Revolution Containers & Fabricators. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Made with excellence in Kenya 🇰🇪</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-gold hover:shadow-gold-intense transition-all hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
