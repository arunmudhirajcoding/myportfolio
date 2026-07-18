export default function sitemap() {
  const baseUrl = "https://arun-kumar-durgollu.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}