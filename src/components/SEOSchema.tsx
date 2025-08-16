import { operators } from "@/data/operators";

export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Telefones das Operadoras de Internet no Brasil",
    "description": "Números de telefone das principais operadoras de internet do Brasil para SAC, suporte técnico, vendas e cancelamento",
    "url": "https://telefone-operadora-brasil.lovable.app",
    "contactPoint": operators.flatMap(operator =>
      operator.phones.map(phone => ({
        "@type": "ContactPoint",
        "telephone": phone.number,
        "contactType": phone.type === 'sac' ? 'customer service' : phone.type,
        "areaServed": "BR",
        "availableLanguage": "Portuguese",
        "name": `${operator.name} - ${phone.description}`
      }))
    )
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};