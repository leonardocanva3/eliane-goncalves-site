import { siteModules } from "@/lib/constants/modules";

export type SiteRoute = {
  href: string;
  label: string;
  description?: string;
};

const baseNavigation: SiteRoute[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
];

const optionalNavigation: SiteRoute[] = [
  ...(siteModules.enablePatientArea
    ? [{ href: "/area-do-paciente", label: "Área do Paciente" }]
    : []),
  ...(siteModules.enableEbook ? [{ href: "/ebook", label: "E-book" }] : []),
  { href: "/contato", label: "Contato" },
];

export const primaryNavigation: SiteRoute[] = [
  ...baseNavigation,
  ...optionalNavigation,
];

export const serviceRoutes: SiteRoute[] = [
  {
    href: "/psicoterapia-online",
    label: "Psicoterapia Online",
    description:
      "Cuidar da sua saúde mental nunca foi tão acessível! Meu atendimento é realizado de forma 100% online ou presencial, proporcionando mais conforto, flexibilidade e praticidade para que você possa se dedicar ao seu bem-estar emocional sem precisar sair de casa.",
  },
  {
    href: "/psicologia-infantil",
    label: "Psicologia Infantil",
    description:
      "A infância é um período fundamental para a construção da identidade, da autoestima e do desenvolvimento emocional.",
  },
  {
    href: "/psicologia-perinatal",
    label: "Psicologia Perinatal",
    description:
      "A maternidade e a paternidade trazem profundas transformações emocionais e psicológicas, seja na gestação, no pós-parto ou no processo de adoção.",
  },
  {
    href: "/coaching-psicologico",
    label: "Coaching Psicológico",
    description:
      "Desenvolvimento Pessoal e Profissional com Base na Psicologia.",
  },
  {
    href: "/analise-comportamental",
    label: "Análise Comportamental",
    description: "COMPREENDA SEUS PADRÕES E TRANSFORME SUA VIDA!",
  },
];

export const preparedRoutes: SiteRoute[] = [
  ...(siteModules.enablePatientArea
    ? [{ href: "/area-do-paciente", label: "Área do Paciente" }]
    : []),
  ...(siteModules.enableEbook ? [{ href: "/ebook", label: "E-book" }] : []),
];

export const allPublicRoutes = [
  ...primaryNavigation,
  ...serviceRoutes,
  ...preparedRoutes.filter(
    (route) => !primaryNavigation.some((item) => item.href === route.href),
  ),
];
