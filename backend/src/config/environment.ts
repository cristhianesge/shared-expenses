export default () => ({
  port: Number(process.env.PORT) || 3000,

  database: {
    url: process.env.DATABASE_URL,
  },
});
