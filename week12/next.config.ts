

// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/videos',
        permanent: true, 
      },
    ];
  },
};
