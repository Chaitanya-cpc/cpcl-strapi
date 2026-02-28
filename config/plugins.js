module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 50 * 1024 * 1024, // 50 MB
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'cpcl-strapi-jwt-secret-2026'),
    },
  },
});
