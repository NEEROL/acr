import { GetServerSideProps } from 'next';

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const enviroment = {
    development: 'http://localhost:3000',
    production: 'https://acromed.pl',
    test: 'https://acromed.pl'
  };
  const staticPages = [
    {
      path: '',
      changefreq: 'hourly',
      priority: 1.0
    },
    {
      path: 'deklaracja',
      changefreq: 'hourly',
      priority: 0.5
    },
    {
      path: 'uslugi-medyczne',
      changefreq: 'hourly',
      priority: 0.5
    }
  ];
  const baseUrl = enviroment[process.env.NODE_ENV];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${staticPages
    .map((page) => {
      return `    <url>
        <loc>${baseUrl}/${page.path}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`;
    })
    .join('\n')} 
</urlset> 
	  `.trim();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;
