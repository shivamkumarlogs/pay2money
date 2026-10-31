import "./globals.css";
import { LinksProvider } from "./context/LinksContext";

export const metadata = {
  title: "Pay2Money - Get Loans Online | Best Rates in India",
  description:
    "Get personal, home, business, car, gold & education loans through trusted partner banks and NBFCs. Calculate EMI and get fast loan disbursals on Pay2Money.",
  keywords:
    "loan, personal loan, home loan, business loan, gold loan, car loan, CIBIL score, loan aggregator India, Pay2Money",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: "Pay2Money - Get Loans Online | Best Rates in India",
    description:
      "Get personal, home, business, car, gold & education loans from 40+ banks and NBFCs. Apply online for free on Pay2Money.",
    url: "https://www.pay2money.com",
    siteName: "Pay2Money",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#081528" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen text-brand-text bg-brand-surface font-sans">
        <LinksProvider>{children}</LinksProvider>
      </body>
    </html>
  );
}
