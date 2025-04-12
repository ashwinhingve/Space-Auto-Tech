import type { Metadata } from "next";
// import "./globals.css";\
 
export const metadata: Metadata = {
  title: "SPACE AUTOMATION service page",
  description: "this page is Dedicated to SPACE AUTOMATION Services",

};
{/* <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" /> */ }
export default function appLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <>
      <div
        className={`antialiased`}>
      
        {children}
         
      
        </div>
      </>
  );
}
