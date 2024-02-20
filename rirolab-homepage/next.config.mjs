/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    async redirects() {
      return [
        {
            source: '/research',
            destination: '/research/topics',
            permanent: false, 
          },
        {
            source: '/publications',
            destination: '/publications/international',
            permanent: false, 
          },
        {
            source: '/people',
            destination: '/people/professor',
            permanent: false, 
          },
        {
          source: '/positions',
          destination: '/positions/undergrads',
          permanent: false, 
        },
      ];
    },
  };
  
  export default nextConfig;