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
    icon: "/assets/products/artificialIntelligenceIcon.png",
    title: {
      en: "ARTIFICIAL INTELLIGENCE",
      ar: "الذكاء الاصطناعي",
    },
    description: {
      en: "Turn complex data into intelligent action through AI solutions designed around your organisation’s operations and objectives.",
      ar: "نحوّل البيانات المعقدة إلى إجراءات ذكية من خلال حلول ذكاء اصطناعي مصممة بما يتوافق مع عمليات المؤسسات وأهدافها.",
    },
  },
  {
    path: "planning-training-and-simulation",
    icon: "/assets/products/planningTrainingSimulationIcon.png",
    title: {
      en: "PLANNING, TRAINING & SIMULATION",
      ar: "التخطيط والتدريب والمحاكاة",
    },
    description: {
      en: "Plan smarter, train realistically and validate critical decisions before they are implemented in the field.",
      ar: "خطط بذكاء، وتدرّب بواقعية، واختبر القرارات الحيوية قبل تنفيذها في الميدان.",
    },
  },
  {
    path: "workforce-management",
    icon: "/assets/products/workforceManagementIcon.png",
    title: {
      en: "WORKFORCE MANAGEMENT",
      ar: "إدارة القوى العاملة",
    },
    description: {
      en: "Turn every request, task and field team into one connected, visible and measurable service operation.",
      ar: "نحوّل كل طلب ومهمة وفريق ميداني إلى عملية خدمية مترابطة وواضحة وقابلة للقياس.",
    },
  },
  {
    path: "artillery-tactical-operation-navigation",
    icon: "/assets/products/artilleryTacticalOperationNavigationIcon.png",
    title: {
      en: "ARTILLERY TACTICAL OPERATION NAVIGATION",
      ar: "العمليات التكتيكية والملاحة للمدفعية",
    },
    description: {
      en: "A connected artillery planning, navigation and fire-control environment designed to strengthen coordination, visibility and operational precision.",
      ar: "بيئة مترابطة لتخطيط المدفعية والملاحة والتحكم في النيران، مصممة للتنسيق والوضوح والدقة التشغيلية.",
    },
  },
];
