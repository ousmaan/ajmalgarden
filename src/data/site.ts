/**
 * Central site data for Ajmal Garden Nursery.
 * Edit here to update contact details, categories or featured videos site-wide.
 */

export const TAGLINE = "Sialkot - Since 1958";

export const HOURS = "Open daily 6:00 AM – 8:00 PM, 7 days a week.";
export const HOURS_SHORT = "Daily: 6 AM – 8 PM";

export const MAPS_URL = "https://maps.app.goo.gl/j2sW11SwMc1kwFyA6";

export const SOCIALS = {
  facebook: "https://www.facebook.com/ajmalgarden12",
  instagram: "https://www.instagram.com/ajmal_garden_nursery/",
};

export interface ContactPerson {
  owner: string;
  display: string; // spaced for easy reading, e.g. "0300 612 1225"
  tel: string; // tel: link format
  wa: string; // international format for wa.me links
}

export const CONTACTS: ContactPerson[] = [
  {
    owner: "Malik Imran",
    display: "0300 612 1225",
    tel: "+923006121225",
    wa: "923006121225",
  },
  {
    owner: "Malik Afzaal",
    display: "0300 712 3618",
    tel: "+923007123618",
    wa: "923007123618",
  },
];

/** Main number — Malik Imran */
export const PRIMARY_CONTACT = CONTACTS[0];

export const CONTACT = {
  name: "Ajmal Garden Nursery",
  phoneDisplay: PRIMARY_CONTACT.display,
  phoneTel: PRIMARY_CONTACT.tel,
  whatsapp: PRIMARY_CONTACT.wa,
  addressLines: [
    "Shatab Garh Road",
    "(near Shahab Poora Road Railway Phatak)",
    "Ajmal Garden Colony, Sialkot",
    "Punjab 51310, Pakistan",
  ],
  // Used only for the embedded map iframe (short links can't embed reliably).
  mapQuery:
    "Ajmal Garden Colony, Shatab Garh Road, Sialkot, Punjab 51310, Pakistan",
};

export const waLink = (message?: string, contact: ContactPerson = PRIMARY_CONTACT) =>
  `https://wa.me/${contact.wa}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const telLink = `tel:${PRIMARY_CONTACT.tel}`;
export const telLinkFor = (contact: ContactPerson) => `tel:${contact.tel}`;

export interface Category {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string; // PLACEHOLDER images — swap with real nursery photos when available
  imageAlt: string;
  highlights: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "indoor",
    name: "Indoor Plants",
    short: "Money plants, snake plants, peace lilies & more for every room.",
    description:
      "Bring the nursery home. From easy-care money plants and snake plants to lush areca palms and peace lilies, our indoor range suits every corner and every light condition — easy starters for beginners and statement plants for collectors.",
    image: "/images/cat-indoor.jpg", // PLACEHOLDER: indoor plants display
    imageAlt: "Indoor houseplants in clay pots at Ajmal Garden Nursery",
    highlights: ["Money plants & pothos", "Snake plants & ZZ plants", "Peace lilies & areca palms", "Low-light friendly picks"],
  },
  {
    id: "outdoor",
    name: "Outdoor Plants",
    short: "Hardy shrubs, hedges and crotons that thrive in Sialkot's climate.",
    description:
      "Plants raised for Punjab weather. Our outdoor stock — ficus hedging, crotons, ornamental shrubs and seasonal bedding plants — is grown and hardened right here, so it settles quickly into your lawn, boundary wall or rooftop garden.",
    image: "/images/cat-outdoor.jpg", // PLACEHOLDER: outdoor shrub rows
    imageAlt: "Rows of outdoor shrubs and hedge plants in nursery bags",
    highlights: ["Ficus & hedge plants", "Crotons & ornamentals", "Seasonal bedding plants", "Rooftop & lawn ready"],
  },
  {
    id: "flowering",
    name: "Flowering Plants & Shrubs",
    short: "Roses, marigolds, hibiscus and bougainvillea bursting with colour.",
    description:
      "The most colourful corner of the nursery. Roses, marigolds, hibiscus, bougainvillea, jasmine (chambeli) and seasonal flowers fill our benches year-round — perfect for gifting, weddings-season decor or simply making your veranda smile.",
    image: "/images/cat-flowering.jpg", // PLACEHOLDER: flowering plants rows
    imageAlt: "Colourful flowering plants including marigolds and roses",
    highlights: ["Desi & hybrid roses", "Jasmine, motia & raat ki rani", "Bougainvillea & hibiscus", "Seasonal flower trays"],
  },
  {
    id: "trees",
    name: "Trees & Palms",
    short: "Shade trees, fruit saplings and palms — singles or bulk orders.",
    description:
      "From a single mango sapling for the courtyard to hundreds of ashoka trees for a housing scheme, we stock shade trees, fruit trees and palms in all sizes. Landscapers and bulk buyers are welcome — visit or call to discuss quantities.",
    image: "/images/cat-trees.jpg", // PLACEHOLDER: tree and palm saplings
    imageAlt: "Young palm and tree saplings standing in rows",
    highlights: ["Ashoka, alstonia & shade trees", "Fruit saplings (mango, citrus, guava)", "Areca, fan & date palms", "Bulk supply for landscapers"],
  },
  {
    id: "bonsai",
    name: "Bonsai & Exotic Plants",
    short: "Hand-styled bonsai and rare specimens for serious collectors.",
    description:
      "A specialty few nurseries in Punjab can match. Our bonsai are trained and styled in-house over years, and our exotic shelf carries rare aroids, ornamental ficus and collector plants. Staff will happily guide you on wiring, pruning and care.",
    image: "/images/cat-bonsai.jpg", // PLACEHOLDER: bonsai display table
    imageAlt: "Mature ficus bonsai in a ceramic pot on a display table",
    highlights: ["In-house styled ficus bonsai", "Rare & collector plants", "Bonsai pots & tools guidance", "Free care advice with purchase"],
  },
  {
    id: "succulents",
    name: "Succulents & Cacti",
    short: "From humble starter pots to prized barrel cacti and rare rosettes.",
    description:
      "The friendliest way to start your plant journey — easy starter succulents and cacti for beginners, plus golden barrels, echeverias, haworthias and more unusual finds for collectors, with honest advice on soil mix and watering.",
    image: "/images/cat-succulents.jpg", // PLACEHOLDER: succulent & cactus table
    imageAlt: "Table full of cacti and succulents in terracotta pots",
    highlights: ["Easy starters for beginners", "Golden barrel & column cacti", "Echeveria, haworthia & jade", "Correct soil mix available"],
  },
  {
    id: "supplies",
    name: "Garden Supplies, Pots & Decor",
    short: "Soil, mulch, pots, planters, fountains and garden decor under one roof.",
    description:
      "Everything your garden needs besides the plants: screened potting soil, compost, mulch, clay and cement pots in every size, ornamental planters, fountains, benches, organic fertilizer, seeds and hand tools. Ask us what your specific plant needs — we'll help you choose it right.",
    image: "/images/cat-supplies.jpg", // PLACEHOLDER: soil bags, pots & tools corner
    imageAlt: "Bags of soil and mulch stacked beside clay pots and tools",
    highlights: ["Screened potting soil & compost", "Clay, cement & designer planters", "Water fountains & garden benches", "Mulch, fertilizer & lawn dressing"],
  },
];

/**
 * FEATURED YOUTUBE VIDEOS — independent vlogger visits to the nursery.
 * To add/remove videos before launch, just edit this array; the grid reflows automatically.
 */
export const VIDEOS: { id: string; title: string }[] = [
  { id: "4xAZlAmTZZc", title: "Ajmal Garden Nursery — vlog feature 1" },
  { id: "SeLV-XQPvl4", title: "Ajmal Garden Nursery — vlog feature 2" },
  { id: "QqaaxoTZrfo", title: "Ajmal Garden Nursery — vlog feature 3" },
  { id: "IgL4WqkOMt4", title: "Ajmal Garden Nursery — vlog feature 4" },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/identify", label: "Identify" },
  { to: "/contact", label: "Contact" },
];
