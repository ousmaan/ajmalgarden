/**
 * Product-photo catalog.
 *
 * Every file path maps to the documented structure in
 * public/images/products/README.md. ProductImage falls back to the category
 * photo until that exact real image has been placed in the folder.
 */

export interface ProductPhoto {
  src: string;
  alt: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  description: string;
  images: ProductPhoto[];
}

export interface CatalogGroup {
  title: string;
  description: string;
  products: CatalogProduct[];
}

export interface CatalogSection {
  categoryId: string;
  groups: CatalogGroup[];
}

const photo = (src: string, alt: string): ProductPhoto => ({
  src: `/images/products/${src}`,
  alt,
});

export const PRODUCT_CATALOG: CatalogSection[] = [
  {
    categoryId: "flowering",
    groups: [
      {
        title: "Dahlia Collection",
        description: "Bold, many-petalled dahlias in a range of distinctive colours and patterns.",
        products: [
          {
            id: "dahlias",
            name: "Dahlia Varieties",
            description: "Lavender, red, hot pink, cream, bicolour and speckled dahlia varieties.",
            images: [
              photo("flowering/dahlia/dahlia-lavender-01.jpg", "Lavender pink dahlia"),
              photo("flowering/dahlia/dahlia-red-01.jpg", "Red dahlia"),
              photo("flowering/dahlia/dahlia-hot-pink-01.jpg", "Hot pink dahlia"),
              photo("flowering/dahlia/dahlia-cream-01.jpg", "Cream dahlia"),
              photo("flowering/dahlia/dahlia-bicolor-01.jpg", "Burgundy and white dahlia"),
              photo("flowering/dahlia/dahlia-speckled-01.jpg", "Speckled cream dahlia"),
            ],
          },
        ],
      },
      {
        title: "Winter Flower Favourites",
        description: "A bright, seasonal selection for pots, borders, lawns and verandas.",
        products: [
          {
            id: "chrysanthemums",
            name: "Chrysanthemum / Gul-e-Daudi",
            description: "Bronze, yellow, red, pink and lilac chrysanthemum selections.",
            images: [
              photo("flowering/chrysanthemum/chrysanthemum-bronze-01.jpg", "Bronze chrysanthemum blooms"),
              photo("flowering/chrysanthemum/chrysanthemum-mix-01.jpg", "Orange and purple chrysanthemum mix"),
              photo("flowering/chrysanthemum/chrysanthemum-red-pink-01.jpg", "Red and pink chrysanthemum mix"),
              photo("flowering/chrysanthemum/chrysanthemum-lilac-01.jpg", "Lilac chrysanthemum cluster"),
            ],
          },
          {
            id: "gerberas",
            name: "Gerbera Daisies",
            description: "Colourful gerbera choices from soft blush and cream to rich red and magenta.",
            images: [
              photo("flowering/gerbera/gerbera-coral-01.jpg", "Coral pink gerbera"),
              photo("flowering/gerbera/gerbera-magenta-double-01.jpg", "Magenta double gerbera"),
              photo("flowering/gerbera/gerbera-red-01.jpg", "Red gerbera"),
              photo("flowering/gerbera/gerbera-cream-01.jpg", "Cream gerbera"),
              photo("flowering/gerbera/gerbera-blush-01.jpg", "Blush peach gerbera"),
              photo("flowering/gerbera/gerbera-light-pink-01.jpg", "Light pink gerbera"),
              photo("flowering/gerbera/gerbera-pink-cream-01.jpg", "Pink gerbera with cream centre"),
              photo("flowering/gerbera/gerbera-magenta-01.jpg", "Magenta gerbera"),
            ],
          },
          {
            id: "primroses",
            name: "Primrose / Primula",
            description: "Compact flowering plants in pink, white, purple and mixed potted colours.",
            images: [
              photo("flowering/primrose/primrose-pink-01.jpg", "Pink primrose flowers"),
              photo("flowering/primrose/primrose-magenta-01.jpg", "Magenta primrose flowers"),
              photo("flowering/primrose/primrose-white-01.jpg", "White primrose flowers"),
              photo("flowering/primrose/primrose-purple-01.jpg", "Purple primrose flowers"),
              photo("flowering/primrose/primrose-collection-01.jpg", "Mixed primrose plants in clay pots"),
            ],
          },
        ],
      },
      {
        title: "Beds, Borders & Climbers",
        description: "Seasonal colour to fill beds, brighten boundaries and soften a home frontage.",
        products: [
          {
            id: "marigolds",
            name: "Orange Marigolds / Genda",
            description: "Dense, bright orange marigold plants for cheerful seasonal beds.",
            images: [photo("flowering/marigold/marigold-orange-bed-01.jpg", "Orange marigold nursery bed")],
          },
          {
            id: "petunias",
            name: "Seasonal Petunias",
            description: "A colourful mix of petunias ready for borders, pots and mass planting.",
            images: [photo("flowering/petunia/petunia-nursery-bed-01.jpg", "Colourful seasonal petunia nursery bed")],
          },
          {
            id: "bougainvillea",
            name: "Red Bougainvillea",
            description: "A vigorous, sun-loving flowering climber for walls, gates and verandas.",
            images: [photo("flowering/bougainvillea/bougainvillea-red-01.jpg", "Red bougainvillea at a house frontage")],
          },
        ],
      },
    ],
  },
  {
    categoryId: "indoor",
    groups: [
      {
        title: "Leafy Indoor Favourites",
        description: "Low-maintenance foliage plants suited to homes, offices and shaded verandas.",
        products: [
          {
            id: "aglaonema",
            name: "Aglaonema / Chinese Evergreen",
            description: "Green, silver and white variegated aglaonema forms for bright, indirect light.",
            images: [
              photo("indoor/aglaonema/aglaonema-snow-white-01.jpg", "White variegated aglaonema"),
              photo("indoor/aglaonema/aglaonema-silver-green-01.jpg", "Silver-green aglaonema"),
              photo("indoor/aglaonema/aglaonema-green-01.jpg", "Green variegated aglaonema"),
            ],
          },
          {
            id: "pothos-philodendron",
            name: "Pothos & Philodendron Climbers",
            description: "Marble queen pothos and lemon-lime philodendron trained on coir moss poles.",
            images: [
              photo("indoor/pothos-philodendron/pothos-marble-queen-01.jpg", "Marble queen pothos on a moss pole"),
              photo("indoor/pothos-philodendron/philodendron-lemon-lime-01.jpg", "Lemon-lime philodendron climbers"),
            ],
          },
          {
            id: "dracaena",
            name: "Dracaena Collection",
            description: "Lemon-lime, Song of India and marginata dracaena forms with striking foliage.",
            images: [
              photo("indoor/dracaena/dracaena-lemon-lime-01.jpg", "Dracaena lemon lime"),
              photo("indoor/dracaena/dracaena-song-of-india-01.jpg", "Variegated Song of India dracaena"),
              photo("indoor/dracaena/dracaena-marginata-01.jpg", "Variegated dracaena marginata"),
            ],
          },
          {
            id: "spider-plant",
            name: "Variegated Spider Plant",
            description: "A dependable striped foliage plant for baskets, table pots and shaded edges.",
            images: [photo("indoor/spider-plant/spider-plant-variegated-01.jpg", "Variegated spider plants")],
          },
        ],
      },
    ],
  },
  {
    categoryId: "outdoor",
    groups: [
      {
        title: "Colourful Foliage Plants",
        description: "Tough ornamental foliage for lawns, borders, entrance planting and containers.",
        products: [
          {
            id: "cordyline",
            name: "Cordyline / Ti Plant",
            description: "Pink and red cordyline selections with strong architectural colour.",
            images: [
              photo("outdoor/cordyline/cordyline-pink-01.jpg", "Pink cordyline plants"),
              photo("outdoor/cordyline/cordyline-red-01.jpg", "Red cordyline nursery bed"),
            ],
          },
          {
            id: "crotons",
            name: "Croton Collection",
            description: "Mixed, pink-variegated and gold-dust crotons for vivid all-season foliage.",
            images: [
              photo("outdoor/croton/croton-mixed-01.jpg", "Mixed croton collection"),
              photo("outdoor/croton/croton-pink-01.jpg", "Pink variegated crotons"),
              photo("outdoor/croton/croton-gold-dust-01.jpg", "Narrow-leaf gold-dust crotons"),
            ],
          },
          {
            id: "variegated-ginger",
            name: "Variegated Ginger",
            description: "Soft green and cream striped foliage for lush tropical planting schemes.",
            images: [photo("outdoor/variegated-ginger/variegated-ginger-01.jpg", "Variegated ginger foliage")],
          },
        ],
      },
    ],
  },
  {
    categoryId: "trees",
    groups: [
      {
        title: "Flowering Trees",
        description: "Seasonal flowering trees that bring shade, colour and a strong focal point to larger gardens.",
        products: [
          {
            id: "jacaranda",
            name: "Jacaranda",
            description: "A striking purple-flowering shade tree.",
            images: [photo("trees/flowering-trees/jacaranda-purple-01.jpg", "Purple jacaranda tree")],
          },
          {
            id: "trumpet-trees",
            name: "Trumpet Trees",
            description: "Yellow and pink flowering trumpet tree selections.",
            images: [
              photo("trees/flowering-trees/golden-trumpet-tree-01.jpg", "Yellow flowering trumpet tree"),
              photo("trees/flowering-trees/pink-trumpet-tree-01.jpg", "Pink flowering trumpet tree"),
            ],
          },
          {
            id: "show-trees",
            name: "Show-Flowering Trees",
            description: "Pink shower tree, royal poinciana, crape myrtle and magnolia varieties.",
            images: [
              photo("trees/flowering-trees/pink-shower-tree-01.jpg", "Pink shower tree"),
              photo("trees/flowering-trees/royal-poinciana-01.jpg", "Red royal poinciana tree"),
              photo("trees/flowering-trees/crape-myrtle-purple-01.jpg", "Purple crape myrtle"),
              photo("trees/flowering-trees/crape-myrtle-red-01.jpg", "Red crape myrtle"),
              photo("trees/flowering-trees/magnolia-white-01.jpg", "White magnolia tree"),
            ],
          },
        ],
      },
      {
        title: "Fruit & Specialty Plants",
        description: "Home-garden fruit plants ranging from familiar favourites to collector varieties.",
        products: [
          {
            id: "mango-chayote",
            name: "Mango & Chayote",
            description: "Red-skinned mango variety and chayote vine selection.",
            images: [
              photo("trees/fruit-trees/mango-red-skin-01.jpg", "Red-skinned mango variety"),
              photo("trees/fruit-trees/chayote-01.jpg", "Chayote fruit growing on vine"),
            ],
          },
          {
            id: "pomegranate-guava",
            name: "Pomegranate & Pink Guava",
            description: "Red Liner pomegranate and Thai pink guava varieties.",
            images: [
              photo("trees/fruit-trees/pomegranate-red-liner-01.jpg", "Red Liner pomegranate"),
              photo("trees/fruit-trees/guava-thai-pink-01.jpg", "Thai pink guava"),
            ],
          },
          {
            id: "berries-stone-fruit",
            name: "Berries & Cherry Plum",
            description: "Mulberry, blackberry, red raspberry and cherry plum selections.",
            images: [
              photo("trees/fruit-trees/mulberry-01.jpg", "Mulberry fruit"),
              photo("trees/fruit-trees/blackberry-01.jpg", "Blackberries"),
              photo("trees/fruit-trees/raspberry-red-01.jpg", "Red raspberries"),
              photo("trees/fruit-trees/cherry-plum-01.jpg", "Cherry plums on a branch"),
            ],
          },
          {
            id: "specialty-fruit",
            name: "Specialty Fruit Plants",
            description: "Water apple, striped fig, golden pineapple and jackfruit selections.",
            images: [
              photo("trees/fruit-trees/water-apple-01.jpg", "Water apple fruit"),
              photo("trees/fruit-trees/fig-striped-01.jpg", "Striped fig variety"),
              photo("trees/fruit-trees/pineapple-golden-01.jpg", "Golden pineapple"),
              photo("trees/fruit-trees/jackfruit-giant-01.jpg", "Jackfruit"),
            ],
          },
        ],
      },
    ],
  },
  {
    categoryId: "supplies",
    groups: [
      {
        title: "Planters & Pots",
        description: "Decorative planters in tall, square, rectangular, carved and classic forms.",
        products: [
          {
            id: "decorative-planters",
            name: "Decorative Planter Collection",
            description: "A broad range of large indoor and outdoor planters in textured finishes.",
            images: [
              photo("garden-decor/planters/decorative-planters-collection-01.jpg", "Large collection of decorative planters"),
              photo("garden-decor/planters/tall-planters-collection-01.jpg", "Tall grey and brown planters"),
            ],
          },
          {
            id: "carved-planters",
            name: "Carved & Relief Planters",
            description: "Square, rectangular and leaf-relief planters with detailed ornamental texture.",
            images: [
              photo("garden-decor/planters/square-ornamental-planters-01.jpg", "Square carved planters"),
              photo("garden-decor/planters/rectangular-planters-01.jpg", "Long carved rectangular planters"),
              photo("garden-decor/planters/leaf-relief-planter-01.jpg", "Grey planter with leaf relief"),
            ],
          },
        ],
      },
      {
        title: "Garden Water Features",
        description: "Ready-made cascading fountain pieces for a patio, entrance or landscape focal point.",
        products: [
          {
            id: "tiered-fountains",
            name: "Tiered Water Fountains",
            description: "Brown and grey standing fountain designs with bowls for cascading water.",
            images: [
              photo("garden-decor/fountains/fountain-brown-tiered-01.jpg", "Brown tiered water fountain"),
              photo("garden-decor/fountains/fountain-grey-tiered-01.jpg", "Grey tiered water fountain"),
            ],
          },
          {
            id: "feature-fountains",
            name: "Statement Fountains",
            description: "Leaf, geometric and wall-style designs for distinctive garden corners.",
            images: [
              photo("garden-decor/fountains/fountain-leaf-cascade-01.jpg", "Leaf-shaped cascade water fountain"),
              photo("garden-decor/fountains/fountain-geometric-cascade-01.jpg", "Geometric cascade water fountain"),
              photo("garden-decor/fountains/fountain-wall-cascade-01.jpg", "Wall cascade water fountain"),
            ],
          },
        ],
      },
      {
        title: "Garden Seating",
        description: "Ornamental benches for homes, lawns, courtyards and public garden spaces.",
        products: [
          {
            id: "garden-benches",
            name: "Ornamental Garden Benches",
            description: "Yellow decorative benches with sculpted details and sturdy dark bases.",
            images: [
              photo("garden-decor/benches/garden-bench-yellow-01.jpg", "Yellow ornamental garden bench"),
              photo("garden-decor/benches/garden-benches-daisy-wall-01.jpg", "Yellow benches against floral mural"),
            ],
          },
        ],
      },
    ],
  },
];

export const catalogForCategory = (categoryId: string) =>
  PRODUCT_CATALOG.find((section) => section.categoryId === categoryId);