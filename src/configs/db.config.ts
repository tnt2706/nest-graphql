export default () => ({
  mongo: {
    database: process.env.DB_CONNECT_STRING || 'mongodb://localhost/shopDev3',
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  },
});
