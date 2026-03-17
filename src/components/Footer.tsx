import { siteConfig } from "@/content/site.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <p className="font-serif text-2xl font-semibold mb-2">
              {siteConfig.name}
            </p>
            <p className="text-primary-foreground/70 text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm">
              Σχετικά
            </a>
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm">
              Υπηρεσίες
            </a>
            <a href="#approach" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm">
              Προσέγγιση
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm">
              Επικοινωνία
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} {siteConfig.name}. Με επιφύλαξη παντός δικαιώματος.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
