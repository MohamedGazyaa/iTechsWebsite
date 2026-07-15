// src/data/products.js
//
// Product entries for iTechs. Each one renders as a card on the products page
// and links to its own page at /products/[path].
//
// Usage in a server component:
//   import { products } from "@/data/products";
//   const { locale } = await params;
//   products.map((product) => (
//     <ProductCard
//       title={product.title[locale]}
//       description={product.description[locale]}
//       icon={product.icon}
//       href={`/products/${product.path}`}
//     />
//   ));
//
// To add a new product:
//   1. Drop the icon image into /public/assets/products/<name>.png
//   2. Add an entry below with both English and Arabic strings
//   3. Create the page at src/app/[locale]/products/<path>/page.jsx

export const products = [
  {
    path: "artificial-intelligence",
    icon: "/assets/products/artificialIntelligence.png",
    title: {
      en: "ARTIFICIAL INTELLIGENCE",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the artificial intelligence product.",
      ar: "نص توضيحي مؤقت لمنتج الذكاء الاصطناعي.",
    },
  },
  {
    path: "planning-training-and-simulation",
    icon: "/assets/products/planningTrainingSimulation.png",
    title: {
      en: "PLANNING, TRAINING & SIMULATION",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the planning, training and simulation product.",
      ar: "نص توضيحي مؤقت لمنتج التخطيط والتدريب والمحاكاة.",
    },
  },
  {
    path: "workforce-management",
    icon: "/assets/products/workforceManagement.png",
    title: {
      en: "WORKFORCE MANAGEMENT",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the workforce management product.",
      ar: "نص توضيحي مؤقت لمنتج إدارة القوى العاملة.",
    },
  },
  {
    path: "artillery-tactical-operation-navigation",
    icon: "/assets/products/artilleryTacticalOperationNavigation.png",
    title: {
      en: "ARTILLERY TACTICAL OPERATION NAVIGATION",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the workforce management product.",
      ar: "نص توضيحي مؤقت لمنتج إدارة القوى العاملة.",
    },
  },
];
