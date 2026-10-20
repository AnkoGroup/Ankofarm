import { Geist, Geist_Mono, Ysabeau_Infant, Geologica } from "next/font/google";
import "./globals.css";
import {HeroUIProvider} from "../../lib/heroui.js";
import Nav from "../../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ysabeuInfant = Ysabeau_Infant({
  variable: "--font-ysabeu-infant",
  subsets: ["latin"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"]
})

export const metadata = {
  title: "Coming soon",
  description: "Agriculture systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body
          className={`${geologica.variable} antialiased`}
        >
        <HeroUIProvider>
          <Nav />
          <div className="max-w-[1400px] m-auto">
            {children}
          </div>
        </HeroUIProvider>
        </body>
    </html>
  
  );
}
