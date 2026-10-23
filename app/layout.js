import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Pay2Money - Get Loans Online | Best Rates in India",
  description:
    "Get personal, home, business, car, gold & education loans from 40+ banks and NBFCs. Check eligibility, calculate EMI and apply online for free on Pay2Money.",
  keywords:
    "loan, personal loan, home loan, business loan, gold loan, car loan, CIBIL score, loan aggregator India, Pay2Money",
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
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#0E2E5E" />
      </head>
      <body className="antialiased min-h-screen text-[#0A1B33] bg-[#FAFCFE]">
        {children}
      </body>
    </html>
  );
}