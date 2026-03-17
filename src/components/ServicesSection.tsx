import iconIndividual from "@/assets/icon-individual.jpg";
import iconCouple from "@/assets/icon-couple.jpg";
import iconFamily from "@/assets/icon-family.jpg";
import iconOnline from "@/assets/icon-online.jpg";
import { siteConfig } from "@/content/site.config";

const serviceImages = [iconIndividual, iconCouple, iconFamily, iconOnline];

const ServicesSection = () => {
  const services = siteConfig.services.map((s, i) => ({
    ...s,
    image: serviceImages[i],
  }));

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Πώς Μπορώ να Βοηθήσω
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-sage-light">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
