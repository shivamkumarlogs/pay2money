export default function robots() {
  const baseUrl = "https://www.pay2money.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/apply/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
