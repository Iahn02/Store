// src/data/products.ts
// Fuente de datos simulada — en producción reemplazar con fetch a API/BD real.

export interface Product {
  slug: string;
  name: string;
  category: 'muebles' | 'joyeria' | 'decoracion';
  subcategory?: 'lamparas' | 'espejos';
  price: number;
  currency: string;
  description: string;
  image: string;
  features: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories?: { slug: string; name: string }[];
}

// ──────────────────────────────────────────────
// Categorías
// ──────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: 'muebles',
    name: 'Muebles',
    description: 'Piezas de diseño con materiales nobles y acabados artesanales.',
    image: '/images/cat-muebles.jpg',
  },
  {
    slug: 'joyeria',
    name: 'Joyería',
    description: 'Joyería artesanal con diseños únicos y materiales de primera.',
    image: '/images/cat-joyeria.jpg',
  },
  {
    slug: 'decoracion',
    name: 'Decoración',
    description: 'Elementos decorativos que transforman cualquier espacio.',
    image: '/images/cat-decoracion.jpg',
    subcategories: [
      { slug: 'lamparas', name: 'Lámparas' },
      { slug: 'espejos', name: 'Espejos' },
    ],
  },
];

// ──────────────────────────────────────────────
// Productos
// ──────────────────────────────────────────────

const products: Product[] = [
  // ── Muebles ──
  {
    slug: 'sillon-escandinavo-roble',
    name: 'Sillón Escandinavo de Roble',
    category: 'muebles',
    price: 320000,
    currency: 'CLP',
    description:
      'Sillón de diseño nórdico con estructura de roble macizo y tapizado en lino natural. Ideal para salones y estudios.',
    image: '/images/sillon-escandinavo.jpg',
    features: ['Roble macizo', 'Tapizado en lino', 'Cojín removible', 'Diseño ergonómico'],
  },
  {
    slug: 'mesa-comedor-nogal',
    name: 'Mesa de Comedor Nogal',
    category: 'muebles',
    price: 480000,
    currency: 'CLP',
    description:
      'Mesa de comedor extensible fabricada en nogal americano con acabado satinado.',
    image: '/images/mesa-nogal.jpg',
    features: ['Nogal americano', 'Extensible 180-240cm', 'Capacidad 6-8 personas', 'Acabado satinado'],
  },
  {
    slug: 'estanteria-industrial',
    name: 'Estantería Industrial',
    category: 'muebles',
    price: 195000,
    currency: 'CLP',
    description:
      'Estantería de estilo industrial con estructura de hierro negro y bandejas de madera reciclada.',
    image: '/images/estanteria-industrial.jpg',
    features: ['Hierro forjado', 'Madera reciclada', '5 niveles', 'Altura 180cm'],
  },

  // ── Joyería ──
  {
    slug: 'anillo-plata-geometrico',
    name: 'Anillo de Plata Geométrico',
    category: 'joyeria',
    price: 45000,
    currency: 'CLP',
    description: 'Anillo artesanal de plata 925 con diseño geométrico minimalista.',
    image: '/images/anillo-geometrico.jpg',
    features: ['Plata 925', 'Tallas 6-10', 'Diseño geométrico', 'Hecho a mano'],
  },
  {
    slug: 'collar-cuarzo-rosa',
    name: 'Collar Cuarzo Rosa',
    category: 'joyeria',
    price: 62000,
    currency: 'CLP',
    description:
      'Collar con dije de cuarzo rosa natural engarzado en plata 925. Cadena de 45cm ajustable.',
    image: '/images/collar-cuarzo.jpg',
    features: ['Cuarzo rosa natural', 'Plata 925', 'Cadena 45cm', 'Cierre ajustable'],
  },
  {
    slug: 'pulsera-oro-minimalista',
    name: 'Pulsera Oro Minimalista',
    category: 'joyeria',
    price: 89000,
    currency: 'CLP',
    description:
      'Pulsera fina en oro laminado 18k con diseño minimalista y cierre magnético.',
    image: '/images/pulsera-oro.jpg',
    features: ['Oro laminado 18k', 'Cierre magnético', 'Largo 18cm', 'Diseño minimalista'],
  },

  // ── Decoración > Lámparas ──
  {
    slug: 'lampara-vintage-dorada',
    name: 'Lámpara Vintage Dorada',
    category: 'decoracion',
    subcategory: 'lamparas',
    price: 89000,
    currency: 'CLP',
    description:
      'Elegante lámpara de mesa con acabado dorado envejecido. Perfecta para crear ambientes cálidos y sofisticados.',
    image: '/images/lampara-vintage.jpg',
    features: ['Acabado dorado', 'Altura 45cm', 'Base de mármol', 'Bombilla E27'],
  },
  {
    slug: 'lampara-colgante-rattan',
    name: 'Lámpara Colgante de Rattán',
    category: 'decoracion',
    subcategory: 'lamparas',
    price: 72000,
    currency: 'CLP',
    description:
      'Lámpara colgante tejida a mano en rattán natural. Estilo bohemio perfecto para comedores.',
    image: '/images/lampara-rattan.jpg',
    features: ['Rattán natural', 'Tejido a mano', 'Diámetro 40cm', 'Cable ajustable'],
  },

  // ── Decoración > Espejos ──
  {
    slug: 'espejo-art-deco',
    name: 'Espejo Art Déco Redondo',
    category: 'decoracion',
    subcategory: 'espejos',
    price: 125000,
    currency: 'CLP',
    description:
      'Espejo circular con marco geométrico estilo Art Déco. Acabado en latón cepillado.',
    image: '/images/espejo-art-deco.jpg',
    features: ['Diámetro 80cm', 'Marco de latón', 'Incluye anclaje', 'Estilo Art Déco'],
  },
  {
    slug: 'espejo-macrame-bohemio',
    name: 'Espejo Macramé Bohemio',
    category: 'decoracion',
    subcategory: 'espejos',
    price: 58000,
    currency: 'CLP',
    description:
      'Espejo redondo con marco de macramé tejido a mano en algodón natural.',
    image: '/images/espejo-macrame.jpg',
    features: ['Algodón natural', 'Tejido a mano', 'Diámetro espejo 30cm', 'Total 60cm'],
  },
];

// ──────────────────────────────────────────────
// Funciones de acceso a datos
// En producción, reemplazar con fetch a tu API/BD.
// ──────────────────────────────────────────────

/** Obtiene un producto por su slug. */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await new Promise((r) => setTimeout(r, 30));
  return products.find((p) => p.slug === slug);
}

/** Obtiene productos filtrados por categoría y/o subcategoría. */
export async function getProducts(category?: string, subcategory?: string): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 30));
  let filtered = products;
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (subcategory) {
    filtered = filtered.filter((p) => p.subcategory === subcategory);
  }
  return filtered;
}

/** Obtiene todos los productos. */
export async function getAllProducts(): Promise<Product[]> {
  return products;
}

/** Obtiene una categoría por slug. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
