// Copy this file to site.config.ts and replace the placeholder values with your own content.
// site.config.ts is gitignored so your personal details stay private.

export const siteConfig = {
  // Your full name — shown in the nav logo and footer
  name: "Your Name",
  tagline: "Your Title / Specialty",

  nav: {
    // Adjust labels and hrefs to match your section IDs
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#approach", label: "Approach" },
    ],
  },

  hero: {
    // Short credential line shown above the main heading
    subtitle: "Your Title / Specialty",
    // The heading is split so the highlight word renders in the accent colour
    heading: "Creating a Safe Space for",
    headingHighlight: "Growth",
    description:
      "A short introductory paragraph about yourself and your practice.",
  },

  about: {
    // Add as many paragraphs as you need
    paragraphs: [
      "First paragraph about your background and qualifications.",
      "Second paragraph about your previous experience.",
      "Third paragraph about your current practice and focus areas.",
    ],
  },

  services: [
    // Each entry maps to one of the service images in ServicesSection.tsx (by index):
    // 0 → icon-individual, 1 → icon-couple, 2 → icon-family, 3 → icon-online
    {
      title: "Individual Therapy",
      description: "A short description of what individual therapy involves.",
    },
    {
      title: "Couples Therapy",
      description: "A short description of what couples therapy involves.",
    },
    {
      title: "Family Therapy",
      description: "A short description of what family therapy involves.",
    },
    {
      title: "Online Sessions",
      description: "A short description of your online session offering.",
    },
  ],

  approach: {
    // Add as many paragraphs as you need to describe your therapeutic approach
    paragraphs: [
      "First paragraph explaining your therapeutic approach.",
      "Second paragraph with more detail about goals and methods.",
    ],
  },

  contact: {
    heading: "Start Your Journey Towards Therapy",
    description:
      "A short invitation encouraging visitors to get in touch.",
    phone: "(+XX) XXXXXXXXXX",
    phoneHref: "tel:+XXXXXXXXXXXX",
    email: "your.email@example.com",
    location: "Your city or neighbourhood",
  },
};
