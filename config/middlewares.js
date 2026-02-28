module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: [
        'https://cpcl.cloud',
        'https://www.cpcl.cloud',
        'https://cpcl.roadiq.org',
        'http://localhost:6001',
        'http://localhost:5173',
      ],
    },
  },
  // 'strapi::poweredBy', // disabled — hides X-Powered-By: Strapi header
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
