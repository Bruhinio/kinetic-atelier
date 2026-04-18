import { Project, ServicePackage, VinylType } from "./types";

export const VINYLS: VinylType[] = [
  {
    id: "v1",
    name: "CYAN OVERDRIVE",
    category: "MATTE METALLIC",
    finish: "TEXTURED",
    image: "https://picsum.photos/seed/cyan-car/800/600",
    isBestSeller: true,
  },
  {
    id: "v2",
    name: "VOID BLACK",
    category: "SATIN",
    finish: "ULTRA MATTE",
    image: "https://picsum.photos/seed/black-car/800/600",
  },
  {
    id: "v3",
    name: "TITANIUM SILVER",
    category: "GLOSS",
    finish: "CHROME",
    image: "https://picsum.photos/seed/silver-car/800/600",
  },
  {
    id: "v4",
    name: "MIDNIGHT PURPLE",
    category: "SHIFT",
    finish: "PEARLESCENT",
    image: "https://picsum.photos/seed/purple-car/800/600",
    isBestSeller: true,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "NEON INTERLUDE",
    carModel: "PORSCHE 911 GT3",
    vinylType: "ACID CYAN METALLIC",
    image: "https://picsum.photos/seed/porsche-wrap/1200/800",
    tags: ["FULL BODY", "DTF DECALS", "CERAMIC"],
  },
  {
    id: "p2",
    title: "VIRTUAL SHADOW",
    carModel: "BMW M4 G82",
    vinylType: "SATIN STEALTH GREY",
    image: "https://picsum.photos/seed/bmw-m4/1200/800",
    tags: ["CHROME DELETE", "INTERIOR"],
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "s1",
    name: "ESSENTIAL CORE",
    price: "$2,400",
    description: "Perfect for a refresh while maintaining stock lines.",
    features: ["FULL EXTERIOR WRAP", "1 YEAR WARRANTY", "SURFACE PREP", "BASIC DTF LOGO"],
  },
  {
    id: "s2",
    name: "PRECISION ULTRA",
    price: "$4,800",
    description: "The gold standard for high-performance aesthetic.",
    features: [
      "DOOR JAMBS INCLUDED",
      "CERAMIC COATING",
      "CUSTOM DTF KIT",
      "3 YEAR WARRANTY",
      "PROFESSIONAL SHOOT",
    ],
    recommended: true,
  },
  {
    id: "s3",
    name: "APEX ATELIER",
    price: "CUSTOM",
    description: "Zero compromises. Fully bespoke transformation.",
    features: ["FULL DISASSEMBLY", "INTERIOR ACCENTS", "LIFETIME WARRANTY", "PICKUP & DELIVERY"],
  },
];
