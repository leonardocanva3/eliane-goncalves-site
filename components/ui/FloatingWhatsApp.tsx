import { whatsappClickAttributes } from "@/lib/analytics/actions";

const whatsappHref =
  "https://wa.me/5541984385991?text=Ol%C3%A1%2C%20Dra.%20Eliane!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Agendar consulta pelo WhatsApp"
      className="animate-whatsapp-breathe group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/80 bg-[var(--color-brand-blue)] px-4 text-white shadow-[0_18px_48px_rgba(13,43,82,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:bottom-7 sm:right-7 sm:h-16 sm:px-5"
      href={whatsappHref}
      rel="noopener noreferrer"
      target="_blank"
      {...whatsappClickAttributes("floating_button")}
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          d="M16 4.5c-6.12 0-11.1 4.9-11.1 10.94 0 1.98.54 3.84 1.49 5.44L5.2 27.5l6.82-1.5A11.26 11.26 0 0 0 16 26.4c6.12 0 11.1-4.9 11.1-10.95C27.1 9.4 22.12 4.5 16 4.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12.35 10.8c-.24-.55-.5-.56-.74-.57h-.64c-.22 0-.58.08-.88.4-.3.32-1.16 1.12-1.16 2.73s1.19 3.17 1.35 3.39c.16.21 2.3 3.64 5.68 4.95 2.8 1.09 3.37.87 3.98.82.61-.06 1.96-.8 2.24-1.56.28-.77.28-1.43.2-1.57-.09-.13-.31-.21-.65-.38-.34-.16-1.96-.96-2.27-1.07-.3-.11-.52-.16-.74.16-.22.32-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.34-.16-1.42-.52-2.7-1.66-1-.88-1.67-1.96-1.86-2.29-.2-.32-.02-.5.14-.66.15-.15.34-.38.5-.57.17-.19.22-.32.34-.54.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.38Z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden pr-1 text-sm font-semibold tracking-normal sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
