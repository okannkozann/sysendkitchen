
export interface NavItem {
  label: string;
  href: string;
}

export interface SlideImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

export interface SlideVideo {
  id: number;
  url: string;
  poster: string;
  title: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Reference {
  id: number;
  name: string;
  category: string;
  description: string;
}

export interface Dealership {
  id: number;
  name: string;
  location: string;
  description: string;
  website: string;
}
