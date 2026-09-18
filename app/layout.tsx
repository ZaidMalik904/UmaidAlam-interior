import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://umaidalam-interior.onrender.com"),
  title: "Ummed Alam | Interior & Acoustic Solutions Across India",
  description: "Ummed Alam provides professional interior, acoustic, soundproofing, false ceiling, woodwork, civil and glass work solutions across India, available 24/7.",
  keywords: [
    "Ummed Alam",
    "All Interior Specialist",
    "Interior & Acoustic Solutions Across India",
    "Sound Proofing",
    "Acoustic Solutions",
    "Acoustic Seat Sealing",
    "Gypsum Partition",
    "Woodwork",
    "Civil Work",
    "Paint Work",
    "Glass Work",
    "Lower Panel SS Work",
    "Interior Contractor India",
    "24/7 Interior Work",
  ],
  authors: [{ name: "Ummed Alam" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Ummed Alam | Interior & Acoustic Solutions Across India",
    description: "Ummed Alam provides professional interior, acoustic, soundproofing, false ceiling, woodwork, civil and glass work solutions across India, available 24/7.",
    url: "https://umaidalam-interior.onrender.com",
    siteName: "Ummed Alam - All Interior Specialist",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Ummed Alam - All Interior Specialist Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#4A5568] bg-white selection:bg-[#E8412C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
