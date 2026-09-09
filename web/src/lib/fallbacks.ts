/**
 * Static landing content — mirrors stitch export / DESIGN.md copy.
 * Images are self-hosted under /public/images (Stitch CDN URLs expire / get blocked).
 */

export const FOX_MASCOT = '/images/fox-mascot.jpg'
export const LOGO_MARK = '/images/logo-mark.jpg'

export const siteDefaults = {
  brandName: 'ΠΕΡΣΟΝΑ',
  brandSub: 'Spritzeria',
  tagline: 'Ilioupoli • Athens',
  phone: '+30 210 99XXXXX',
  address: 'Vitsi 42, Ilioupoli, Athens',
  addressEl: 'Βίτσι 42, Ηλιούπολη 16341',
  instagram: 'https://instagram.com/persona_ath',
  tiktok: 'https://tiktok.com/@persona.ath',
  instagramHandle: '@persona_ath',
  tiktokHandle: '@persona.ath',
  mapsUrl: 'https://maps.google.com/?q=Vitsi+42,+Ilioupoli,+Athens',
  seoTitle: 'ΠΕΡΣΟΝΑ Spritzeria | Aperitivo & DJ Nights στην Ηλιούπολη',
  seoDescription:
    'Sun-drenched Mediterranean aperitivo culture transitioning into late-night eclectic DJ grooves. Handcrafted spritzes στην καρδιά της Ηλιούπολης.',
}

export const menuItems = [
  {
    id: 'classic-persona-spritz',
    category: 'spritz',
    name: 'Classic Persona Spritz',
    subtitle: 'The Ilioupoli Sunset',
    price: '€8.50',
    description:
      'Aperol, Prosecco Superiore DOC, artisanal bergamot soda, fresh ruby orange slice & organic Castelvetrano olive.',
    notes: 'Citrusy • Bittersweet • Sparkly',
    badge: 'House Signature',
    mono: 'DOC Veneto',
    accent: 'favorite',
    image: '/images/menu-classic-spritz.jpg',
  },
  {
    id: 'negro-persona',
    category: 'spritz',
    name: 'Negro Persona',
    subtitle: 'Dark & Bittersweet',
    price: '€9.00',
    description:
      'Select Amaro Negra, Prosecco, soda, orange zest & a whisper of espresso bitter.',
    notes: 'Bitter • Deep • Velvet',
    badge: 'Must Try',
    mono: 'Amaro Edit',
    accent: 'must',
    image: '/images/menu-negro-persona.jpg',
  },
  {
    id: 'limoncello-fizz',
    category: 'spritz',
    name: 'Limoncello Fizz',
    subtitle: 'Amalfi Nostalgia',
    price: '€8.50',
    description:
      'Artisanal Amalfi limoncello, Mediterranean tonic, fresh sweet basil leaves & prosecco brut.',
    notes: 'Zesty • Herbaceous • Lively',
    badge: null,
    mono: 'Amalfi Craft',
    accent: 'sun',
    image: '/images/menu-limoncello.jpg',
  },
  {
    id: 'bitter-rosa-seltz',
    category: 'spritz',
    name: 'Bitter Rosa Seltz',
    subtitle: 'Bold Milanese Bitters',
    price: '€9.00',
    description:
      'Campari, pink grapefruit reduction, premium high-pressure seltz water & aromatic rosemary sprig.',
    notes: 'Bold • Botanical • Dry',
    badge: null,
    mono: 'Milano Classic',
    accent: 'purist',
    image: '/images/menu-bitter-rosa.jpg',
  },
  {
    id: 'pizzaiolo-focaccia',
    category: 'bites',
    name: 'Pizzaiolo Focaccia',
    subtitle: 'Wood-Fired Crust',
    price: '€7.50',
    description:
      '48ωρη ζύμη ωρίμανσης, San Marzano marinara, ρίγανη Ηπείρου, χοντρό αλάτι & έξτρα παρθένο ελαιόλαδο.',
    notes: 'Crispy • Fluffy • Warm',
    badge: 'Viral TikTok',
    mono: 'Open Flame 450°C',
    accent: 'baked',
    image: '/images/menu-focaccia.jpg',
  },
  {
    id: 'tagliere-misto',
    category: 'bites',
    name: 'Tagliere Misto Board',
    subtitle: 'Sharing is Caring',
    price: '€13.50',
    description:
      'Prosciutto di Parma 24 μηνών, Gorgonzola Dolce, ελιές Castelvetrano, τραγανά taralli Puglia & μέλι.',
    notes: 'Savory • Creamy • To Share',
    badge: null,
    mono: 'DOP Selection',
    accent: 'share',
    image: '/images/menu-tagliere.jpg',
  },
] as const

export const galleryItems = [
  {
    title: 'Pizzaiolo Fire',
    caption: '48ωρη ζύμη που ψήνεται σε 90 δευτερόλεπτα',
    meta: '14.2K views on TikTok',
    href: 'https://tiktok.com/@persona.ath',
    icon: 'local_fire_department',
    image: '/images/gallery-pizzaiolo.jpg',
  },
  {
    title: 'Girls Toast',
    caption: '«Girls just wanna have Spritz» moments',
    meta: '@persona_ath story',
    href: 'https://instagram.com/persona_ath',
    icon: 'celebration',
    image: '/images/gallery-toast.jpg',
  },
  {
    title: 'Sun City Sunset',
    caption: 'Η ώρα που η Ηλιούπολη παίρνει χρώμα πορτοκαλί',
    meta: 'Reel Highlight',
    href: 'https://instagram.com/persona_ath',
    icon: 'wb_twilight',
    image: '/images/gallery-sunset.jpg',
  },
  {
    title: '00s DJ Night',
    caption: 'Όταν μπαίνει το αγαπημένο σου 00s hit στις 23:30',
    meta: '8.9K likes',
    href: 'https://tiktok.com/@persona.ath',
    icon: 'album',
    image: '/images/gallery-dj.jpg',
  },
] as const

export const nightImages = {
  garden: '/images/night-garden.jpg',
  club: '/images/night-club.jpg',
  map: '/images/map-ilioupoli.jpg',
}
