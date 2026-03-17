import { siteConfig } from "@/content/site.config";

const ApproachSection = () => {
  const { approach } = siteConfig;
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4">Η Προσέγγισή μου</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
            Η Συστημική Προσέγγιση
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-6 text-left">
            {approach.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
