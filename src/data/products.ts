// src/data/products.ts
// NORDY mock product data

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  features: string[];
  isNew?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: 'muebles', name: 'Muebles', description: 'Diseños minimalistas y funcionales para cada espacio.', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267', icon: '🛋️' },
  { slug: 'decoracion', name: 'Decoración', description: 'Detalles que transforman tu casa en un hogar.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15', icon: '🖼️' },
  { slug: 'organizacion', name: 'Organización', description: 'Soluciones inteligentes para mantener el orden.', image: 'https://images.unsplash.com/photo-1595514535315-2244bd999e07', icon: '📦' },
  { slug: 'iluminacion', name: 'Iluminación', description: 'Luz cálida y diseños modernos para brillar en tu hogar.', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c', icon: '💡' },
  { slug: 'textiles', name: 'Textiles', description: 'Texturas suaves para mayor confort y calidez.', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf', icon: '🧵' },
];

export const products: Product[] = [
  // MUEBLES
  {
    id: '1', slug: 'silla-nordmyra', name: 'Silla NORDMYRA', category: 'Muebles', categorySlug: 'muebles', price: 49990, currency: 'CLP',
    description: 'Silla con respaldo curvo en abedul blanco, diseñada para ofrecer la máxima comodidad.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Estructura de abedul', 'Apilable', 'Diseño ergonómico'], isNew: true
  },
  {
    id: '3', slug: 'mesa-hemnes', name: 'Mesa de Centro HEMNES', category: 'Muebles', categorySlug: 'muebles', price: 149000, currency: 'CLP',
    description: 'Mesa de centro negra con diseño escandinavo clásico.',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Madera de pino maciza', 'Compartimento oculto', 'Diseño resistente']
  },
  {
    id: '7', slug: 'sillon-pello', name: 'Sillón PELLO', category: 'Muebles', categorySlug: 'muebles', price: 59990, currency: 'CLP',
    description: 'Sillón con ligera flexibilidad que ofrece un confort relajante.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Estructura tubular ligera', 'Funda lavable', 'Ajuste suave']
  },
  
  // TEXTILES
  {
    id: '2', slug: 'alfombra-lohals', name: 'Alfombra LOHALS', category: 'Textiles', categorySlug: 'textiles', price: 129990, currency: 'CLP',
    description: 'Alfombra de tejido plano de yute tejida a mano.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['100% Yute natural', 'Tejida a mano', 'Fácil de aspirar']
  },
  
  // ILUMINACION
  {
    id: '4', slug: 'bombilla-tradfri', name: 'Bombilla TRÅDFRI E26', category: 'Iluminación', categorySlug: 'iluminacion', price: 19990, currency: 'CLP',
    description: 'Bombilla LED inteligente. Regula la intensidad para crear diferentes ambientes.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['LED de larga duración', '800 lúmenes', 'Control regulable'], isNew: true
  },
  {
    id: '6', slug: 'lampara-ranarp', name: 'Lámpara de Trabajo RANARP', category: 'Iluminación', categorySlug: 'iluminacion', price: 39990, currency: 'CLP',
    description: 'Lámpara de estudio en color negro con estilo industrial retro.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Brazo ajustable', 'Detalles dorados', 'Cable textil a juego']
  },
  
  // ORGANIZACION
  {
    id: '5', slug: 'estanteria-kallax', name: 'Estantería KALLAX', category: 'Organización', categorySlug: 'organizacion', price: 89990, currency: 'CLP',
    description: 'Estantería versátil en color blanco que puede usarse en vertical u horizontal.',
    image: 'https://images.unsplash.com/photo-1595514535315-2244bd999e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Múltiples cubos de almacenamiento', 'Acabado en laca blanca', 'Soporta cajas y cestas']
  },
  
  // DECORACION
  {
    id: '8', slug: 'planta-fejka', name: 'Planta Artificial FEJKA', category: 'Decoración', categorySlug: 'decoracion', price: 12990, currency: 'CLP',
    description: 'Planta artificial en maceta que parece real y se mantiene verde año tras año.',
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fcc0f64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Apariencia natural', 'No necesita riego', 'Maceta negra minimalista'], isNew: true
  }
];

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  if (categorySlug) {
    return products.filter((p) => p.categorySlug === categorySlug);
  }
  return products;
}

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
