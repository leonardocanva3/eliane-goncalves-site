export const siteModules = {
  enablePatientArea: true,
  enableEbook: true,
  enableTestimonials: true,
  enableInstagram: true,
  enableMaps: true,
  enableBlog: false,
} as const;

// Modular framework notes:
// - E-book can be true or false depending on each client. Eliane has an e-book.
// - Patient Area can be true or false depending on each client and project phase.
// - Blog remains false by default for this reusable base.
// - This foundation is intended to be reused for Psychologists and Physiotherapists.
