export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://darshanmakwana.netlify.app/sitemap.xml",
  };
}
