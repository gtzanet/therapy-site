import aboutImage from "@/assets/about-illustration.jpeg";
import { siteConfig } from "@/content/site.config";

const AboutSection = () => {
  const { about } = siteConfig;
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-sage-light rounded-2xl" />
            <img
              src={aboutImage}
              alt="Feel, Heal, Grow - Ψυχοθεραπεία"
              className="relative z-10 w-full h-auto rounded-2xl shadow-card object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-4">Σχετικά με Εμένα</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Λίγα λόγια για εμένα
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
