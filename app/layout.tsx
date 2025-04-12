import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"


export const metadata: Metadata = {
  title: "Space Automation",
  description: "This is a homepage of Space Automation ",

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html>

      <body
        className={`antialiased`}>
        <Navbar />
        {children}
       <Footer/>
      </body>
    </html>
  );
}
