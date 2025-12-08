import type { Product, Category } from "@shared/schema";

export const categories: Category[] = [
  {
    id: "football",
    name: "Football",
    nameAr: "كرة القدم",
    icon: "football",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
  },
  {
    id: "basketball",
    name: "Basketball",
    nameAr: "كرة السلة",
    icon: "basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
  },
  {
    id: "swimming",
    name: "Swimming",
    nameAr: "السباحة",
    icon: "waves",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop",
  },
  {
    id: "gym",
    name: "Gym & Fitness",
    nameAr: "الجيم واللياقة",
    icon: "dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
  },
  {
    id: "tennis",
    name: "Tennis",
    nameAr: "التنس",
    icon: "circle-dot",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop",
  },
  {
    id: "running",
    name: "Running",
    nameAr: "الجري",
    icon: "footprints",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop",
  },
  {
    id: "yoga",
    name: "Yoga",
    nameAr: "اليوجا",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
  },
  {
    id: "boxing",
    name: "Boxing",
    nameAr: "الملاكمة",
    icon: "hand-fist",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop",
  },
];

export const products: Product[] = [
  // Football products
  {
    id: "fb-1",
    name: "Nike Flight Official Match Ball",
    nameAr: "كرة قدم نايكي فلايت الرسمية",
    description: "Official match ball with advanced aerodynamic design",
    descriptionAr: "كرة المباريات الرسمية بتصميم ديناميكي هوائي متطور",
    price: 2500,
    originalPrice: 3200,
    categoryId: "football",
    image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "fb-2",
    name: "Adidas Predator Football Boots",
    nameAr: "حذاء أديداس بريداتور للكرة",
    description: "Professional football boots with superior grip",
    descriptionAr: "حذاء كرة قدم احترافي بثبات عالي",
    price: 3500,
    originalPrice: null,
    categoryId: "football",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: "fb-3",
    name: "Professional Goalkeeper Gloves",
    nameAr: "قفازات حارس مرمى احترافية",
    description: "Premium goalkeeper gloves with excellent grip",
    descriptionAr: "قفازات حارس مرمى عالية الجودة بقبضة ممتازة",
    price: 850,
    originalPrice: 1100,
    categoryId: "football",
    image: "https://images.unsplash.com/photo-1626118285411-d6f2f5f5f6c2?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.4,
    reviewCount: 67,
  },
  // Basketball products
  {
    id: "bb-1",
    name: "Spalding NBA Official Game Ball",
    nameAr: "كرة سبالدينج NBA الرسمية",
    description: "Official NBA game ball with premium leather",
    descriptionAr: "كرة السلة الرسمية للـNBA من الجلد الفاخر",
    price: 1800,
    originalPrice: 2200,
    categoryId: "basketball",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: "bb-2",
    name: "Nike Air Jordan Basketball Shoes",
    nameAr: "حذاء نايكي اير جوردان",
    description: "Iconic basketball shoes with Air cushioning",
    descriptionAr: "حذاء كرة السلة الأسطوري بتقنية Air المبطنة",
    price: 4500,
    originalPrice: 5200,
    categoryId: "basketball",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 312,
  },
  // Swimming products
  {
    id: "sw-1",
    name: "Speedo Fastskin Racing Goggles",
    nameAr: "نظارات سباحة سبيدو فاست سكين",
    description: "Professional racing goggles with anti-fog lens",
    descriptionAr: "نظارات سباحة احترافية مضادة للضباب",
    price: 650,
    originalPrice: null,
    categoryId: "swimming",
    image: "https://images.unsplash.com/photo-1622632169740-85c306c57aa2?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 98,
  },
  {
    id: "sw-2",
    name: "Arena Competition Swimsuit",
    nameAr: "مايوه سباحة أرينا للمنافسات",
    description: "High-performance competition swimsuit",
    descriptionAr: "مايوه سباحة عالي الأداء للمنافسات",
    price: 1200,
    originalPrice: 1500,
    categoryId: "swimming",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 76,
  },
  // Gym products
  {
    id: "gym-1",
    name: "Adjustable Dumbbell Set 40kg",
    nameAr: "طقم دمبل قابل للتعديل 40 كجم",
    description: "Complete adjustable dumbbell set for home gym",
    descriptionAr: "طقم دمبل كامل قابل للتعديل للجيم المنزلي",
    price: 4800,
    originalPrice: 5500,
    categoryId: "gym",
    image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 189,
  },
  {
    id: "gym-2",
    name: "Resistance Bands Set",
    nameAr: "طقم أحزمة المقاومة",
    description: "Complete resistance bands for full body workout",
    descriptionAr: "طقم كامل من أحزمة المقاومة لتمارين الجسم",
    price: 350,
    originalPrice: 450,
    categoryId: "gym",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.3,
    reviewCount: 145,
  },
  {
    id: "gym-3",
    name: "Premium Yoga Mat 6mm",
    nameAr: "بساط يوجا فاخر 6 ملم",
    description: "Non-slip premium yoga mat with carrying strap",
    descriptionAr: "بساط يوجا فاخر مانع للانزلاق مع حزام حمل",
    price: 450,
    originalPrice: null,
    categoryId: "gym",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 203,
  },
  // Tennis products
  {
    id: "tn-1",
    name: "Wilson Pro Staff Tennis Racket",
    nameAr: "مضرب تنس ويلسون برو ستاف",
    description: "Professional tennis racket used by champions",
    descriptionAr: "مضرب تنس احترافي يستخدمه الأبطال",
    price: 5200,
    originalPrice: 6000,
    categoryId: "tennis",
    image: "https://images.unsplash.com/photo-1617083277624-25db6f5f6a36?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: "tn-2",
    name: "Tennis Ball Pack (12 balls)",
    nameAr: "عبوة كرات تنس (12 كرة)",
    description: "Premium quality tennis balls for all surfaces",
    descriptionAr: "كرات تنس عالية الجودة لجميع الأسطح",
    price: 320,
    originalPrice: null,
    categoryId: "tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.4,
    reviewCount: 156,
  },
  // Running products
  {
    id: "rn-1",
    name: "Nike Air Zoom Running Shoes",
    nameAr: "حذاء جري نايكي اير زوم",
    description: "Lightweight running shoes with responsive cushioning",
    descriptionAr: "حذاء جري خفيف الوزن بتوسيد متجاوب",
    price: 3200,
    originalPrice: 3800,
    categoryId: "running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 423,
  },
  {
    id: "rn-2",
    name: "Sports Smart Watch",
    nameAr: "ساعة رياضية ذكية",
    description: "GPS sports watch with heart rate monitor",
    descriptionAr: "ساعة رياضية GPS مع مراقب نبضات القلب",
    price: 2800,
    originalPrice: 3500,
    categoryId: "running",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 267,
  },
  // Yoga products
  {
    id: "yg-1",
    name: "Yoga Block Set (2 pieces)",
    nameAr: "طقم بلوكات يوجا (قطعتين)",
    description: "High-density foam yoga blocks for support",
    descriptionAr: "بلوكات يوجا فوم عالية الكثافة للدعم",
    price: 180,
    originalPrice: null,
    categoryId: "yoga",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 134,
  },
  // Boxing products
  {
    id: "bx-1",
    name: "Everlast Pro Boxing Gloves 14oz",
    nameAr: "قفازات ملاكمة إيفرلاست برو 14 أونصة",
    description: "Professional boxing gloves with wrist support",
    descriptionAr: "قفازات ملاكمة احترافية مع دعم للمعصم",
    price: 1500,
    originalPrice: 1800,
    categoryId: "boxing",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "bx-2",
    name: "Heavy Punching Bag 100cm",
    nameAr: "كيس ملاكمة ثقيل 100 سم",
    description: "Durable punching bag for intensive training",
    descriptionAr: "كيس ملاكمة متين للتدريب المكثف",
    price: 2200,
    originalPrice: 2800,
    categoryId: "boxing",
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&h=600&fit=crop",
    images: [],
    inStock: true,
    isNew: true,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 67,
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-EG")} ج.م`;
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.nameAr.includes(query) ||
      p.descriptionAr.includes(query)
  );
}

export function filterProducts(options: {
  search?: string;
  categories?: string[];
  priceRange?: [number, number];
  featured?: boolean;
  isNew?: boolean;
}): Product[] {
  let result = [...products];

  if (options.search) {
    const lowerQuery = options.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.nameAr.includes(options.search!) ||
        p.descriptionAr.includes(options.search!)
    );
  }

  if (options.categories && options.categories.length > 0) {
    result = result.filter((p) => options.categories!.includes(p.categoryId));
  }

  if (options.priceRange) {
    result = result.filter(
      (p) => p.price >= options.priceRange![0] && p.price <= options.priceRange![1]
    );
  }

  if (options.featured) {
    result = result.filter((p) => p.isFeatured);
  }

  if (options.isNew) {
    result = result.filter((p) => p.isNew);
  }

  return result;
}
