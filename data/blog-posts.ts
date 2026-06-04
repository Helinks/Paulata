export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: number
  featured: boolean
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  count: number
}

export const blogCategories: BlogCategory[] = [
  { id: "1", name: "Bienestar", slug: "bienestar", count: 12 },
  { id: "2", name: "Consejos de Sueño", slug: "consejos-sueno", count: 8 },
  { id: "3", name: "Moda y Estilo", slug: "moda-estilo", count: 6 },
  { id: "4", name: "Cuidado Personal", slug: "cuidado-personal", count: 5 },
  { id: "5", name: "Vida en Casa", slug: "vida-casa", count: 4 },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "el-arte-de-dormir-bien",
    title: "El Arte de Dormir Bien: Guía Completa para un Descanso Reparador",
    excerpt:
      "Descubre los secretos para mejorar la calidad de tu sueño y despertar cada mañana sintiéndote renovado. Te compartimos rutinas probadas y consejos de expertos.",
    content: "",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    category: "Consejos de Sueño",
    author: {
      name: "María González",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    publishedAt: "2024-03-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "como-elegir-la-pijama-perfecta",
    title: "Cómo Elegir la Pijama Perfecta para Cada Temporada",
    excerpt:
      "La elección de tu pijama impacta directamente en la calidad de tu descanso. Aprende a seleccionar los materiales y estilos ideales para ti.",
    content: "",
    image: "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b4?w=800&q=80",
    category: "Moda y Estilo",
    author: {
      name: "Carlos Ruiz",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    publishedAt: "2024-03-12",
    readTime: 6,
    featured: true,
  },
  {
    id: "3",
    slug: "beneficios-algodon-organico",
    title: "Los Beneficios del Algodón Orgánico en tu Ropa de Dormir",
    excerpt:
      "El algodón orgánico no solo es mejor para el planeta, también ofrece ventajas únicas para tu piel y tu salud durante el descanso nocturno.",
    content: "",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    category: "Bienestar",
    author: {
      name: "Ana Martínez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    publishedAt: "2024-03-10",
    readTime: 5,
    featured: false,
  },
  {
    id: "4",
    slug: "ritual-nocturno-perfecto",
    title: "Crea tu Ritual Nocturno Perfecto en 5 Pasos",
    excerpt:
      "Una rutina nocturna bien diseñada puede transformar tu descanso. Te mostramos cómo crear un ritual que prepare cuerpo y mente para dormir.",
    content: "",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    category: "Cuidado Personal",
    author: {
      name: "Laura Sánchez",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
    },
    publishedAt: "2024-03-08",
    readTime: 7,
    featured: false,
  },
  {
    id: "5",
    slug: "tendencias-loungewear-2024",
    title: "Tendencias de Loungewear 2024: Comodidad con Estilo",
    excerpt:
      "El loungewear ha evolucionado. Descubre las tendencias que dominarán este año y cómo incorporarlas a tu guardarropa de casa.",
    content: "",
    image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&q=80",
    category: "Moda y Estilo",
    author: {
      name: "Diego López",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    publishedAt: "2024-03-05",
    readTime: 4,
    featured: false,
  },
  {
    id: "6",
    slug: "temperatura-ideal-dormir",
    title: "La Temperatura Ideal para Dormir: Lo que Dice la Ciencia",
    excerpt:
      "La temperatura de tu habitación y tu ropa de dormir juegan un papel crucial en la calidad del sueño. Conoce los datos respaldados por estudios.",
    content: "",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    category: "Consejos de Sueño",
    author: {
      name: "Roberto Fernández",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    publishedAt: "2024-03-02",
    readTime: 6,
    featured: false,
  },
  {
    id: "7",
    slug: "crear-espacio-relajacion",
    title: "Cómo Crear un Espacio de Relajación en tu Hogar",
    excerpt:
      "Tu ambiente influye en tu bienestar. Aprende a diseñar rincones de tranquilidad en casa donde puedas desconectar y recargar energías.",
    content: "",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    category: "Vida en Casa",
    author: {
      name: "Sofía Torres",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    },
    publishedAt: "2024-02-28",
    readTime: 5,
    featured: false,
  },
  {
    id: "8",
    slug: "mindfulness-antes-dormir",
    title: "Mindfulness Antes de Dormir: Técnicas para Calmar la Mente",
    excerpt:
      "La práctica del mindfulness puede ser la clave para conciliar el sueño más rápido y disfrutar de un descanso más profundo.",
    content: "",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    category: "Bienestar",
    author: {
      name: "Patricia Méndez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    },
    publishedAt: "2024-02-25",
    readTime: 7,
    featured: false,
  },
]

export const popularPosts = blogPosts.slice(0, 4)
