import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Providers from "./component/Providers";

export const metadata: Metadata = {
  title: "Space Auto Tech — Industrial Automation Solutions",
  description: "Space Auto Tech engineers PLC systems, IoT platforms, and SCADA solutions for industrial environments. Based in Bhopal, India.",
  keywords: ["PLC development", "SCADA", "IoT", "industrial automation", "Bhopal", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-cloud text-ink" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
