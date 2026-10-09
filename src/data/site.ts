/**
 * Single configuration point for the whole landing page.
 *
 * EVERY value tagged with `[TODO: client ...]` is provisional and must be
 * replaced with client-approved data before publication. Do not invent
 * agency facts: no names, destinations, altitudes, prices, phone numbers,
 * staff members or social URLs.
 *
 * UI copy lives here in Spanish (site language); technical identifiers and
 * comments stay in English.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Destination {
  name: string;
  image: string;
  description: string;
  location: string;
  altitude: string;
  difficulty: string;
  duration: string;
}

export interface TrackRecordPlace {
  name: string;
  image: string;
  description: string;
  note: string;
}

export interface RouteLevel {
  id: string;
  name: string;
  description: string;
  features: string;
  relatedDestinations: string;
  duration: string;
  recommendations: string;
}

export interface Experience {
  title: string;
  place: string;
  description: string;
  image: string;
}

export interface GearItem {
  name: string;
  image: string;
  description: string;
  notes: string;
  price: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export const site = {
  /** [TODO: client agency name] */
  name: '[TODO: agency name]',
  /** [TODO: client-approved main promotional title] */
  tagline: '[TODO: main promotional title]',
  /** [TODO: client-approved short intro] */
  intro: '[TODO: short introductory text approved by the client]',
  /** [TODO: meta description approved by the client] */
  description:
    '[TODO: provisional meta description — replace with client-approved text]',

  /** [TODO: client logo file (provide under /public)] */
  logo: '',
};

/**
 * Vertical navigation (spec 2.1). Labels match the contracted sections.
 * Anchor ids must match the `id` attribute of each section component.
 */
export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Rutas por nivel', href: '#rutas' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Renta de equipo', href: '#renta-equipo' },
  { label: 'Staff', href: '#staff' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

/**
 * WhatsApp contact (spec 2.13).
 * `number` must be digits only, including country code (e.g. 5215500000000).
 * Leave empty until the client confirms the real number — an empty number
 * disables every WhatsApp button instead of faking a working link.
 */
export const whatsapp = {
  /** [TODO: client WhatsApp number, digits only with country code] */
  number: '',
  /** [TODO: client-approved default conversation message] */
  defaultMessage: '[TODO: client-approved default WhatsApp message]',
};

/** Social links (spec 2.14). Empty url = not configured, link is not rendered. */
export const socials: SocialLink[] = [
  { platform: 'Facebook', url: '' }, // [TODO: client Facebook URL]
  { platform: 'Instagram', url: '' }, // [TODO: client Instagram URL]
  { platform: 'TikTok', url: '' }, // [TODO: client TikTok URL]
];

/** Nosotros — values (spec 2.4). */
export const values: ValueItem[] = [
  {
    title: '[TODO: value 1 title]',
    description: '[TODO: client-approved description of this value]',
  },
  {
    title: '[TODO: value 2 title]',
    description: '[TODO: client-approved description of this value]',
  },
  {
    title: '[TODO: value 3 title]',
    description: '[TODO: client-approved description of this value]',
  },
];

/** Destinos y montañas (spec 2.5). */
export const destinations: Destination[] = [
  {
    name: '[TODO: destination name]',
    image: '', // [TODO: client photo]
    description: '[TODO: client-approved description]',
    location: '[TODO: client-approved location]',
    altitude: '[TODO: client-approved altitude]',
    difficulty: '[TODO: client-approved difficulty level]',
    duration: '[TODO: client-approved estimated duration]',
  },
];

/** Trayectoria — places already visited (spec 2.6). */
export const trackRecord: TrackRecordPlace[] = [
  {
    name: '[TODO: place name]',
    image: '', // [TODO: client photo]
    description: '[TODO: client-approved short description]',
    note: '[TODO: client-approved context or data]',
  },
];

/**
 * Rutas por nivel (spec 2.7). The four category names are fixed by the
 * specification; all other fields are client-provided content.
 */
export const routeLevels: RouteLevel[] = [
  {
    id: 'principiantes',
    name: 'Principiantes',
    description: '[TODO: client-approved level description]',
    features: '[TODO: client-approved activity characteristics]',
    relatedDestinations: '[TODO: client-approved related destinations]',
    duration: '[TODO: client-approved duration / effort]',
    recommendations: '[TODO: client-approved recommendations]',
  },
  {
    id: 'intermedios',
    name: 'Intermedios',
    description: '[TODO: client-approved level description]',
    features: '[TODO: client-approved activity characteristics]',
    relatedDestinations: '[TODO: client-approved related destinations]',
    duration: '[TODO: client-approved duration / effort]',
    recommendations: '[TODO: client-approved recommendations]',
  },
  {
    id: 'avanzados',
    name: 'Avanzados',
    description: '[TODO: client-approved level description]',
    features: '[TODO: client-approved activity characteristics]',
    relatedDestinations: '[TODO: client-approved related destinations]',
    duration: '[TODO: client-approved duration / effort]',
    recommendations: '[TODO: client-approved recommendations]',
  },
  {
    id: 'alto-rendimiento',
    name: 'Alto rendimiento',
    description: '[TODO: client-approved level description]',
    features: '[TODO: client-approved activity characteristics]',
    relatedDestinations: '[TODO: client-approved related destinations]',
    duration: '[TODO: client-approved duration / effort]',
    recommendations: '[TODO: client-approved recommendations]',
  },
];

/** Experiencias (spec 2.8). */
export const experiences: Experience[] = [
  {
    title: '[TODO: experience title]',
    place: '[TODO: client-approved place]',
    description: '[TODO: client-approved description]',
    image: '', // [TODO: client photo]
  },
];

/** Renta de equipo (spec 2.9). Only items the client confirms. */
export const gear: GearItem[] = [
  {
    name: '[TODO: confirmed rental item]',
    image: '', // [TODO: client photo]
    description: '[TODO: client-approved description]',
    notes: '[TODO: client-approved usage notes]',
    price: '', // [TODO: client-approved price/conditions — leave empty if not confirmed]
  },
];

/** Staff (spec 2.10). Real names/roles must come from the client. */
export const staff: StaffMember[] = [
  {
    name: '[TODO: staff name]',
    role: '[TODO: staff role]',
    bio: '[TODO: client-approved short bio]',
    photo: '', // [TODO: client photo]
  },
];

/** Galerías (spec 2.11). */
export const gallery: GalleryImage[] = [
  { src: '', alt: '[TODO: client-approved alt text]' }, // [TODO: client photo]
];
