import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
  // weight:""
});

export const metadata = {
  metadataBase: new URL("https://grocery-ecommerce-full-stack.vercel.app/"),

  title: {
    default: "GorerBazar | Smart Learning Toys for Kids",
    template: "%s |ghorerBazar",
  },

  description:
    "GorerBazar brings safe, colorful, and educational toys that help children learn numbers, logic, and creativity through joyful play.",

  applicationName: "ghorerbazar",

  keywords: [
    "learning toys",
    "educational toys for kids",
    "kids math toys",
    "preschool learning toys",
    "montessori toys",
    "early childhood learning",
    "number learning toys",
    "kids educational board",
  ],

  authors: [{ name: "GorerBazar Team" }],
  creator: "GorerBazar",
  publisher: "GorerBazar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/W4whY1Z6/turmeri-powder-300x300.jpg",
    apple: "https://i.ibb.co.com/W4whY1Z6/turmeri-powder-300x300.jpg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grocery-ecommerce-full-stack.vercel.app/",
    siteName: "GorerBazar",
    title: "GorerBazar | Smart GorerBazar",
    description:
      "Discover colorful and safe learning toys designed to develop kids’ math skills, creativity, and confidence.",
    images: [
      {
        url: "https://i.ibb.co.com/W4whY1Z6/turmeri-powder-300x300.jpg",
        width: 1200,
        height: 630,
        alt: "GorerBazar Homepage Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GorerBazar | Smart Learning Toys for Kids",
    description:
      "Safe and educational toys to help children learn through play.",
    images: ["https://i.ibb.co.com/W4whY1Z6/turmeri-powder-300x300.jpg"],
  },

  category: "education",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
