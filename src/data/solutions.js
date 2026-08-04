// src/data/services.js
//
// Service entries for iTechs. Each one renders as a card on the services page
// and links to its own page at /services/[path].
//
// Usage in a server component:
//   import { services } from "@/data/services";
//   const { locale } = await params;
//   services.map((service) => (
//     <ServiceCard
//       title={service.title[locale]}
//       description={service.description[locale]}
//       icon={service.icon}
//       href={`/services/${service.path}`}
//     />
//   ));
//
// To add a new service:
//   1. Drop the icon image into /public/icons/services/<name>.png
//   2. Add an entry below with both English and Arabic strings
//   3. Create the page at src/app/[locale]/services/<path>/page.jsx

export const solutions = [
  {
    path: "geospatial-solutions",
    icon: "/assets/solutions/geospatialSolutions.png",
    title: {
      en: "GEOSAPATIAL SOLUTIONS",
      ar: "الحلول الجيومكانية",
    },
    description: {
      en: "Transform location data into meaningful intelligence using Esri technology, revealing patterns, opportunities and smarter ways forward.",
      ar: "نحوّل البيانات المكانية إلى معلومات قيّمة باستخدام تقنيات Esri، بما يكشف الأنماط والفرص ويدعم الوصول إلى حلول ومسارات أكثر ذكاءً.",
    },
  },
  {
    path: "forensics-and-cybersecurity-solutions",
    icon: "/assets/solutions/forensicsCyberSecuirty.png",
    title: {
      en: "SECURITY SOLUTIONS",
      ar: "الحلول الأمنية",
    },
    description: {
      en: "Security solutions are designed to protect critical infrastructure, facilities and urban environments through advanced surveillance, access control and integrated monitoring systems.",
      ar: "صُممت حلولنا الأمنية لحماية البنية التحتية الحيوية والمنشآت والبيئات الحضرية من خلال أنظمة المراقبة المتقدمة، والتحكم في الوصول، ومنصات المراقبة المتكاملة.",
    },
  },
  {
    path: "defense-command-and-control-applications",
    icon: "/assets/solutions/defenseCommand.png",
    title: {
      en: "DEFENSE COMMAND AND CONTROL APPLICATIONS",
      ar: "تطبيقات القيادة والسيطرة الدفاعية ",
    },
    description: {
      en: "A unified operational picture for faster decisions, coordinated action and greater mission control.",
      ar: "صورة تشغيلية موحدة تدعم اتخاذ قرارات أسرع، وتنسيق الإجراءات، وتعزيز السيطرة على المهام والعمليات.",
    },
  },
  {
    path: "data-management-and-analytics-services",
    icon: "/assets/solutions/dataManagement.png",
    title: {
      en: "DATA MANAGEMENT AND ANALYTICS SERVICES",
      ar: "خدمات إدارة البيانات والتحليلات",
    },
    description: {
      en: "Turn fragmented information into trusted intelligence that supports confident and measurable decisions.",
      ar: "نحوّل المعلومات المتفرقة إلى بيانات موثوقة تدعم اتخاذ قرارات واثقة قابلة للتنفيذ.",
    },
  },
  {
    path: "integration-services-and-iot",
    icon: "/assets/solutions/integrationServices.png",
    title: {
      en: "INTEGRATION SERVICES AND IoT",
      ar: "خدمات الربط وإنترنت الأشياء",
    },
    description: {
      en: "Bringing technologies, infrastructure and people together within one seamless operational ecosystem.",
      ar: "نربط أجهزة إنترنت الأشياء والبنية التحتية الرقمية والأنظمة المختلفة عبر تكامل تقني موحد يتيح تدفق البيانات وتشغيل العمليات بذكاء.",
    },
  },
  {
    path: "digital-twin",
    icon: "/assets/solutions/digitalTwin.png",
    title: {
      en: "DIGITAL TWIN",
      ar: "التوأم الرقمي",
    },
    description: {
      en: "A digital twin is a real-time virtual replica of a physical asset, system, or environment that enables continuous monitoring, analysis, and optimisation.",
      ar: "التوأم الرقمي هو نسخة افتراضية حية ومتصلة لحظياً من أصل مادي أو نظام أو بيئة، تتيح المراقبة الدقيقة والتحليل المتقدم والتنبؤ بالمستقبل وتحسين الأداء بشكل مستمر، مما يمكّن المؤسسات من اتخاذ قرارات أسرع وأكثر ذكاءً وفعالية.",
    },
  },
];
