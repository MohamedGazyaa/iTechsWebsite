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

export const services = [
  {
    path: "geospatial-solutions",
    icon: "/assets/services/geospatialSolutions.png",
    title: {
      en: "GEOSAPATIAL SOLUTIONS",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the web development service.",
      ar: "نص توضيحي مؤقت لخدمة تطوير الويب.",
    },
  },
  {
    path: "forensics-and-cybersecurity-solutions",
    icon: "/assets/services/forensicsCyberSecuirty.png",
    title: {
      en: "SECURITY SOLUTIONS",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the mobile apps service.",
      ar: "نص توضيحي مؤقت لخدمة تطبيقات الجوال.",
    },
  },
  {
    path: "defense-command-and-control-applications",
    icon: "/assets/services/defenseCommand.png",
    title: {
      en: "DEFENSE COMMAND AND CONTROL APPLICATIONS",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the data analytics service.",
      ar: "نص توضيحي مؤقت لخدمة تحليل البيانات.",
    },
  },
  {
    path: "system-integration-services",
    icon: "/assets/services/systemIntegration.png",
    title: {
      en: "SYSTEM INTEGRATION SERVICES",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the cloud solutions service.",
      ar: "نص توضيحي مؤقت لخدمة الحلول السحابية.",
    },
  },
  {
    path: "data-management-and-analytics-services",
    icon: "/assets/services/dataManagement.png",
    title: {
      en: "DATA MANAGEMENT AND ANALYTICS SERVICES",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the cybersecurity service.",
      ar: "نص توضيحي مؤقت لخدمة الأمن السيبراني.",
    },
  },
  {
    path: "integration-services-and-iot",
    icon: "/assets/services/integrationServices.png",
    title: {
      en: "INTEGRATION SERVICES AND IOT",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the consulting service.",
      ar: "نص توضيحي مؤقت لخدمة الاستشارات.",
    },
  },
  {
    path: "digital-twin",
    icon: "/assets/services/digitalTwin.png",
    title: {
      en: "DIGITAL TWIN",
      ar: "اسم مؤقت",
    },
    description: {
      en: "Placeholder description for the consulting service.",
      ar: "نص توضيحي مؤقت لخدمة الاستشارات.",
    },
  },
];