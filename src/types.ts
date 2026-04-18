export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface VinylType {
  id: string;
  name: string;
  category: string;
  image: string;
  finish: string;
  isBestSeller?: boolean;
}

export interface Project {
  id: string;
  title: string;
  carModel: string;
  vinylType: string;
  image: string;
  tags: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
