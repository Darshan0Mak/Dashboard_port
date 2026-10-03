import { Inter, Oswald } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";
import Image from "next/image";
import LeftBg from "../../public/images/docs-left.png";
import RightBg from "../../public/images/docs-right.png";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/header";
import Footer from "../components/footer";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";

config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

// ─── Production SEO Metadata ───
export const metadata = {
  metadataBase: new URL("https://darshanmakwana.netlify.app"),
  title: {
    default: "Darshan Makwana | Senior UI/UX Designer & Product Designer",
    template: "%s | Darshan Makwana",
  },
  description:
    "Portfolio of Darshan Makwana, Senior UI/UX Designer specializing in scalable design systems, digital products, and intuitive web interfaces.",
  keywords: [
    "Darshan Makwana",
    "UI UX Designer",
    "Senior Product Designer",
    "Design Systems",
    "Figma Specialist",
    "Frontend Developer",
  ],
  authors: [{ name: "Darshan Makwana" }],
  creator: "Darshan Makwana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshanmakwana.netlify.app",
    title: "Darshan Makwana | Senior UI/UX Designer",
    description:
      "Explore UI/UX case studies, design systems, and web projects by Darshan Makwana.",
    siteName: "Darshan Makwana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Makwana | Senior UI/UX Designer",
    description:
      "Selected works and UI design explorations by Darshan Makwana.",
  },
};

export default function RootLayout({ children }) {
  // ─── Google Search Schema Markup (JSON-LD) ───
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Darshan Makwana",
    jobTitle: "Senior UI/UX Designer",
    url: "https://darshanmakwana.netlify.app",
    sameAs: [
      "https://www.linkedin.com/in/darshan0makwana/",
      "https://www.behance.net/darshanmakwana0896",
    ],
    knowsAbout: [
      "UI/UX Design",
      "User Experience",
      "Design Systems",
      "Figma",
      "Frontend Development",
      "Product Strategy",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans font-body antialiased relative overflow-x-hidden">
        {/* Google Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GoogleAnalytics />

        {/* ─── Microsoft Clarity Tracking (તમારો Project ID અહીં ઉમેરવો) ─── */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yrs44q50qw");
    `,
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Left Sticky Background Image */}
          <div className="fixed top-0 -left-45 h-full w-auto scale-150 pointer-events-none -z-10 opacity-70">
            <Image
              src={LeftBg}
              alt="Decorative background left"
              className="object-contain h-full w-auto"
              quality={100}
              priority
            />
          </div>

          {/* Right Sticky Background Image */}
          <div className="fixed top-0 -right-7.5 h-full w-auto scale-250 pointer-events-none -z-10 opacity-50">
            <Image
              src={RightBg}
              alt="Decorative background right"
              className="object-cover h-full w-auto"
              quality={100}
              priority
            />
          </div>

          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
