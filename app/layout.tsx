import type { Metadata } from "next";
import "./globals.css";

/**
 * METADATA
 * This object configures the <head> of your HTML (like the title in the browser tab).
 * Next.js automatically injects this for SEO purposes.
 * KEYWORDS TO SEARCH: "Next.js Metadata API", "Next.js SEO"
 */
export const metadata: Metadata = {
  title: "Ibn Al Balad Hommos",
  description: "Ibn Al Balad Hommos - Lebanon",
  icons: {
    icon: "/data/layout_images/logo_pic.avif",
  },
};

/**
 * ROOT LAYOUT
 * This is the wrapper for your entire application. Every page you create will be 
 * rendered inside the 'children' prop here.
 * 
 * KEYWORDS TO SEARCH: "Next.js Root Layout", "React children prop"
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* We load our Google Fonts and FontAwesome icons here so they apply globally */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Outfit:wght@300;600;700;800;900&family=Cairo:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {/* 'children' represents the page currently being viewed (like app/page.tsx) */}
        {children}
      </body>
    </html>
  );
}
