export const allCamisas = [

  // --- PRODUCTO 1 ---
  {
    id: "resilient-prodry-black",
    brand: "Resilient",
    category: "Fitness",
    tags: ["Gym", "Compresión", "Entrenamiento", "Hombre"],
    rating: 4.9,
    sold: 1250,
    created_at: new Date().toISOString(),
    name: "Camiseta Resilient ProDry · Negro",
    slug: "camiseta-resilient-prodry-negro",
    images: [
      "/img/camisas/prodry-black-1.webp",
      "/img/camisas/prodry-black-2.webp",
    ],
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "Camiseta técnica de alto rendimiento con tecnología ProDry® diseñada para entrenamientos intensos. Tejido ligero, secado rápido y máxima libertad de movimiento." }
          ]
        }
      ]
    },
    features: [
      "Tecnología ProDry®",
      "Ultraliviana y respirable",
      "Costuras anti-rozaduras",
      "Fit atlético para entrenamientos funcionales"
    ],
  
    variants: [
      { id: "prodry-black-s", color: "#000000", name: "Negro", size: "S", stock: 9, price: 69.99 },
      { id: "prodry-black-m", color: "#000000", name: "Negro", size: "M", stock: 18, price: 69.99 },
      { id: "prodry-black-l", color: "#000000", name: "Negro", size: "L", stock: 12, price: 69.99 },
      { id: "prodry-black-xl", color: "#000000", name: "Negro", size: "XL", stock: 5, price: 69.99 },
    ],
  },

  // --- PRODUCTO 2 ---
  {
    id: "resilient-powerfit-blue",
    brand: "Resilient",
    category: "Fitness",
    tags: ["Powerlifting", "Compresión", "Gym", "Hombre"],
    rating: 4.8,
    sold: 980,
    created_at: new Date().toISOString(),
    name: "Camiseta Resilient PowerFit · Azul Eléctrico",
    slug: "camiseta-resilient-powerfit-azul",
    images: [
      "/img/camisas/powerfit-blue-1.webp",
      "/img/camisas/powerfit-blue-2.webp",
    ],
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "Diseñada para atletas que buscan potencia y movilidad. Su tejido compresivo mejora la postura y el rendimiento en levantamientos pesados." }
          ]
        }
      ]
    },
    features: [
      "Compresión ligera PowerFit®",
      "Soporte adicional en hombros",
      "Respirable y de secado rápido",
      "Ideal para powerlifting y cross training"
    ],

    variants: [
      { id: "powerfit-blue-s", color: "#0047FF", name: "Azul eléctrico", size: "S", stock: 8, price: 64.99 },
      { id: "powerfit-blue-m", color: "#0047FF", name: "Azul eléctrico", size: "M", stock: 14, price: 64.99 },
      { id: "powerfit-blue-l", color: "#0047FF", name: "Azul eléctrico", size: "L", stock: 10, price: 64.99 },
    ],
  },

  // --- PRODUCTO 3 ---
  {
    id: "resilient-custom-red",
    brand: "Resilient",
    category: "Personalizadas",
    tags: ["Personalización", "Gym", "Diseño propio", "Unisex"],
    rating: 5.0,
    sold: 2200,
    created_at: new Date().toISOString(),
    name: "Camiseta Personalizable Resilient · Rojo Intenso",
    slug: "camiseta-resilient-personalizable-rojo",
    images: [
      "/img/camisas/custom-red-1.webp",
      "/img/camisas/custom-red-2.webp",
    ],
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "Personaliza tu camiseta con nombres, frases, logos y diseños exclusivos. Perfecta para equipos de gimnasio, clubes deportivos y creadores de contenido." }
          ]
        }
      ]
    },
    features: [
      "Área de impresión frontal y posterior",
      "Impresión HD resistente al sudor",
      "Tejido flexible y suave",
      "Perfecta para grupos y equipos deportivos"
    ],

    variants: [
      { id: "custom-red-s", color: "#FF0000", name: "Rojo intenso", size: "S", stock: 10, price: 79.99 },
      { id: "custom-red-m", color: "#FF0000", name: "Rojo intenso", size: "M", stock: 12, price: 79.99 },
      { id: "custom-red-l", color: "#FF0000", name: "Rojo intenso", size: "L", stock: 8, price: 79.99 },
      { id: "custom-red-xl", color: "#FF0000", name: "Rojo intenso", size: "XL", stock: 4, price: 79.99 },
    ],
  },

  // --- PRODUCTO 4 ---
  {
    id: "resilient-retro-green",
    brand: "Resilient",
    category: "Lifestyle",
    tags: ["Retro", "Urban", "Streetwear", "Unisex"],
    rating: 4.7,
    sold: 550,
    created_at: new Date().toISOString(),
    name: "Camiseta Resilient Retro 90’s · Verde",
    slug: "camiseta-resilient-retro-verde",
    images: [
      "/img/camisas/retro-green-1.webp",
      "/img/camisas/retro-green-2.webp",
    ],
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "Inspirada en los clásicos deportivos de los 90’s. Estilo urbano vibrante con un fit moderno para entrenar o vestir casual." }
          ]
        }
      ]
    },
    features: [
      "Algodón premium suave",
      "Gráficos retro exclusivos",
      "Perfecta para uso diario",
      "Duradera y cómoda"
    ],
    
    variants: [
      { id: "retro-green-s", color: "#00A859", name: "Verde retro", size: "S", stock: 2, price: 59.99 },
      { id: "retro-green-m", color: "#00A859", name: "Verde retro", size: "M", stock: 6, price: 59.99 },
    ],
  },

  // --- PRODUCTO 5 ---
  {
    id: "resilient-elite-blackgold",
    brand: "Resilient",
    category: "High Performance",
    tags: ["Elite", "Premium", "Atletas", "Hombre"],
    rating: 5.0,
    sold: 3100,
    created_at: new Date().toISOString(),
    name: "Camiseta Resilient Elite Gold · Edición Limitada",
    slug: "camiseta-resilient-elite-gold",
    images: [
      "/img/camisas/elite-gold-1.webp",
      "/img/camisas/elite-gold-2.webp",
    ],
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "Edición limitada Elite Gold con tecnología AirFlow Max®. Diseñada para atletas de élite que exigen máximo rendimiento y estilo premium." }
          ]
        }
      ]
    },
    features: [
      "Tecnología AirFlow Max®",
      "Antibacterial y antiolor",
      "Detalles dorados premium",
      "Edición limitada 2024"
    ],

    variants: [
      { id: "elite-gold-m", color: "#000000", name: "Negro/Dorado", size: "M", stock: 3, price: 129.99 },
      { id: "elite-gold-l", color: "#000000", name: "Negro/Dorado", size: "L", stock: 4, price: 129.99 },
    ],
  },
];

// Productos recientes
export const recentCamisas = allCamisas.slice(0, 4);

// Más populares
export const popularCamisas = allCamisas
  .slice()
  .sort((a, b) => b.sold - a.sold)
  .slice(0, 4);
