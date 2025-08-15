export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://telefonesoperadoras.com.br/#organization",
        "name": "Telefones das Operadoras de Internet",
        "url": "https://telefonesoperadoras.com.br",
        "description": "Portal com todos os telefones das principais operadoras de internet do Brasil para SAC, suporte técnico, vendas e atendimento ao cliente.",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "Brasil"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "103-31",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese",
            "name": "Vivo SAC"
          },
          {
            "@type": "ContactPoint", 
            "telephone": "1052",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese",
            "name": "Claro SAC"
          },
          {
            "@type": "ContactPoint",
            "telephone": "1056",
            "contactType": "customer service", 
            "areaServed": "BR",
            "availableLanguage": "Portuguese",
            "name": "TIM SAC"
          },
          {
            "@type": "ContactPoint",
            "telephone": "103-14",
            "contactType": "customer service",
            "areaServed": "BR", 
            "availableLanguage": "Portuguese",
            "name": "Oi SAC"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://telefonesoperadoras.com.br/#website",
        "url": "https://telefonesoperadoras.com.br",
        "name": "Telefones das Operadoras de Internet no Brasil",
        "description": "Encontre todos os telefones das operadoras de internet: Vivo, Claro, TIM, Oi, Algar. SAC, suporte, vendas e cancelamento.",
        "inLanguage": "pt-BR",
        "isPartOf": {
          "@id": "https://telefonesoperadoras.com.br/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://telefonesoperadoras.com.br"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Telefones das Operadoras",
            "item": "https://telefonesoperadoras.com.br/#operadoras"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};