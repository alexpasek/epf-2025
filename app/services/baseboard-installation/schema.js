import { EMAIL, PHONE_HREF, SITE_URL } from "@/app/config";

const baseUrl = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");

function buildProvider() {
  return {
    "@id": `${baseUrl}/#org`,
    "@type": "HomeAndConstructionBusiness",
    name: "EPF Pro Services",
    url: `${baseUrl}/`,
    telephone: PHONE_HREF.replace(/^tel:/, ""),
    email: EMAIL,
  };
}

function buildFaqPage(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function absoluteServiceUrl(path) {
  return `${baseUrl}${path}`;
}

export function buildBaseboardHubGraph({ serviceUrl, description, areas, faqs }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: "Baseboard Installation in the GTA",
        serviceType: [
          "Baseboard Installation",
          "Baseboard Replacement",
          "Shoe Moulding Installation",
          "Quarter Round Installation",
          "Caulking and Paint-Ready Trim Finishing",
        ],
        areaServed: areas.map((area) => ({
          "@type": "City",
          name: `${area.name}, ON`,
        })),
        url: serviceUrl,
        description,
        provider: buildProvider(),
      },
      buildFaqPage(faqs),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/services/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Baseboard Installation",
            item: serviceUrl,
          },
        ],
      },
    ],
  };
}

export function buildBaseboardCityGraph({
  cityName,
  serviceUrl,
  description,
  faqs,
  neighborhoods = [],
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: `Baseboard Installation in ${cityName}`,
        serviceType: [
          "Baseboard Installation",
          "Baseboard Replacement",
          "Shoe Moulding Installation",
          "Quarter Round Installation",
          "Caulking and Paint-Ready Trim Finishing",
        ],
        areaServed: [
          { "@type": "City", name: `${cityName}, ON` },
          ...neighborhoods.map((area) => ({
            "@type": "Place",
            name: `${area}, ${cityName}, ON`,
          })),
        ],
        url: serviceUrl,
        description,
        provider: buildProvider(),
      },
      buildFaqPage(faqs),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/services/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Baseboard Installation",
            item: `${baseUrl}/services/baseboard-installation/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: cityName,
            item: serviceUrl,
          },
        ],
      },
    ],
  };
}
