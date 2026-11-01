export default function manifest() {
  return {
    id: "/",
    name: "Pay2Money",
    short_name: "Pay2Money",
    description: "Get Loans Online | Best Rates in India",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#081528",
    theme_color: "#081528",
    lang: "en-IN",
    categories: ["finance", "utilities"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
