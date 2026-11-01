export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pay2Money loan advisors for personal, business, or home loans. Request callbacks and quick guidance with zero upfront borrower fees.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Pay2Money",
    description:
      "Get in touch with Pay2Money loan advisors for personal, business, or home loans with zero upfront borrower fees.",
    url: "https://www.pay2money.com/contact",
    type: "website",
  },
};

const contactSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.pay2money.com/contact/#webpage",
      url: "https://www.pay2money.com/contact",
      name: "Contact Pay2Money",
      description:
        "Direct contact channel and inquiry submission for personal, home, and business loans across India.",
      mainEntity: {
        "@type": "FinancialService",
        name: "Pay2Money",
        telephone: "+91 7239037839",
        email: "info@pay2money.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pay2money.com/contact/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.pay2money.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.pay2money.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchemas),
        }}
      />
      {children}
    </>
  );
}
