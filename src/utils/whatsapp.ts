import { whatsapp } from '../data/site';

/**
 * Builds a WhatsApp deep link from the configured number and message.
 *
 * Returns `null` when no number is configured yet, so callers can render a
 * clearly-marked placeholder instead of a decorative, non-functional button.
 *
 * @param message Optional message; defaults to `whatsapp.defaultMessage`.
 * @returns `https://wa.me/<number>?text=<encoded message>` or `null`.
 */
export function whatsappUrl(message?: string): string | null {
  const number = whatsapp.number.replace(/\D/g, '');
  if (!number) return null;

  const text = (message ?? whatsapp.defaultMessage).trim();
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
