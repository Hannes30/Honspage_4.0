async function GET() {
  return new Response(
    `		<?xml version="1.0" encoding="UTF-8" ?>		<urlset			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"			xmlns:xhtml="https://www.w3.org/1999/xhtml"			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"		>	
    <url>
        <loc>http://hannes-scheibelauer.at/</loc>
        <lastmod>2024-04-22</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>http://hannes-scheibelauer.at/projects</loc>
        <lastmod>2024-04-20</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>http://hannes-scheibelauer.at/services</loc>
        <lastmod>2024-04-21</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>http://hannes-scheibelauer.at/impressum</loc>
        <lastmod>2024-03-15</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
    </url>

            </urlset>`.trim(),
    { headers: { "Content-Type": "application/xml" } }
  );
}
export {
  GET
};
