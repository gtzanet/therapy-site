import sunflowerImage from "@/assets/sunflower-hero.jpg";
import { siteConfig } from "@/content/site.config";

const HeroSection = () => {
  const { hero } = siteConfig;
  return (
    <section className="min-h-screen gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-up">
              {hero.subtitle}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200 text-balance">
              {hero.heading} <span className="text-primary">{hero.headingHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg opacity-0 animate-fade-up animation-delay-400 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-600">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary-dark shadow-lg hover:shadow-xl h-11 px-8">
                Επικοινωνία
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-sage-light rounded-full blur-3xl opacity-60 animate-float" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-full blur-2xl opacity-40 animate-float animation-delay-200" />
              
              {/* Main image */}
              <div className="relative z-10">
                <img
                  src={sunflowerImage}
                  alt="Ηλιοτρόπιο - Ελένη Κόλλια Ψυχολόγος"
                  className="w-80 md:w-[28rem] h-auto rounded-2xl shadow-card object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
