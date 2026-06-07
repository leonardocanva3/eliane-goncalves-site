export type ServiceContent = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  subtitle?: string;
  sections?: Array<{
    title?: string;
    description?: string;
    lead?: string;
    items?: string[];
  }>;
};
