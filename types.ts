
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
  logo: any;
  id: number;
  name: string;
  location: string;
  description: string;
  website: string;
}

// Vite asset module declarations for static imports
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.mp4' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

