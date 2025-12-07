
import { NavItem, SlideImage, SlideVideo, Product, Reference, Dealership } from './types';

// Import static assets so Vite handles their URLs during build
import resim10 from './assets/resim10.png';
import resim2 from './assets/resim2.png';
import resim3 from './assets/resim3.png';
import resim9 from './assets/resim9.png';
import resim6 from './assets/resim6.png';
import resim7 from './assets/resim7.png';
import resim8 from './assets/resim8.png';
import resim4 from './assets/resim4.png';

import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4';
import video3 from './assets/video3.mp4';


export const NAV_ITEMS: NavItem[] = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Ürünler', href: '#products' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Referanslar', href: '#references' },
  { label: 'İletişim', href: '#contact' },
];




// HERO görseli (background)
export const HERO_BG = "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"; 
// ↑ HERO_IMG_ID yerine kendi hero resminin Drive ID'sini yaz

export const SLIDE_IMAGES: SlideImage[] = [
  {
    id: 1,
    url: resim10,
    alt: 'Pişirme Ocakları',
    title: '',
  },
  {
    id: 2,
    url: resim2,
    alt: '',
    title: '',
  },
  {
    id: 3,
    url: resim3,
    alt: '',
    title: '',
  },
  {
    id: 4,
    url: resim9,
    alt: '',
    title: '',
  },
];





// Using high quality Pexels video links for demonstration
export const SLIDE_VIDEOS: SlideVideo[] = [
  {
    id: 1,
    url: video1,
    poster: '',
    title: '',
  },
  {
    id: 2,
    url: video2,
    poster: '',
    title: '',
  },
  {
    id: 3,
    url: video3,
    poster: '',
    title: '',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Konveksiyonel Fırın",
    category: "Pişirme",
    image: resim6,
  },
  {
    id: 2,
    title: "Bulaşık Makineleri",
    category: "Yıkama",
    image: resim7,
  },
  {
    id: 3,
    title: "Endüstriyel Ocaklar",
    category: "Pişirme",
    image: resim8,
  },
  {
    id: 4,
    title: "Hazırlık Tezgahları",
    category: "Nötr Üniteler",
    image: resim4,
  }
];

export const REFERENCES: Reference[] = [
  {
    id: 1,
    name: "Grand Pera Hotel",
    category: "Otel Projesi",
    description: "Ana mutfak, ziyafet alanları ve soğuk hava depolarının anahtar teslim kurulumu."
  },
  {
    id: 2,
    name: "Lezzet Dünyası Zinciri",
    category: "Restoran",
    description: "İstanbul genelindeki 12 şubenin endüstriyel pişirme hatlarının yenilenmesi."
  },
  {
    id: 3,
    name: "Acıbadem Hastanesi",
    category: "Sağlık Kurumu",
    description: "Günlük 5000 kişilik yemek üretim kapasitesine sahip merkezi mutfak projesi."
  },
  {
    id: 4,
    name: "Tofaş Fabrika",
    category: "Sanayi Tesisi",
    description: "Personel yemekhanesi ve self-servis hatlarının modernizasyonu."
  }
];

export const DEALERSHIPS: Dealership[] = [
  {
    id: 1,
    name: "Doğu İklimlendirme",
    location: "İzmir",
    description: "Doğu Davlumbazları SYS güvencesinde",
    website: "https://dogu.com.tr/",
    logo: undefined
  },
  {
    id: 2,
    name: "Ege Endüstriyel",
    location: "İzmir",
    description: "Ege bölgesindeki otel ve tatil köyleri için proje ortağımız.",
    website: "https://www.google.com",
    logo: undefined
  },
  {
    id: 3,
    name: "Akdeniz Profesyonel",
    location: "Antalya",
    description: "Akdeniz bölgesi otel projeleri ve teknik destek merkezi.",
    website: "https://www.google.com",
    logo: undefined
  },
  {
    id: 4,
    name: "Karadeniz Teknik Mutfak",
    location: "Trabzon",
    description: "Karadeniz bölgesi dağıtım ve kurulum bayimiz.",
    website: "https://www.google.com",
    logo: undefined
  },
   {
    id: 4,
    name: "KFC",
    location: "Trabzon",
    description: "Karadeniz bölgesi dağıtım ve kurulum bayimiz.",
    website: "https://www.google.com",
    logo: undefined
  }
];
