import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"


export const metadata: Metadata = {
  title: "Space Auto Tech - Advanced Automation Solutions",
  description: "Space Auto Tech provides cutting-edge automation solutions for IoT, industrial systems, and smart technology. Explore our products, stock, and store.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
