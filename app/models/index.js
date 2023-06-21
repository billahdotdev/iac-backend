require('mongoose')
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.debug('Connected to DB instance'))
    .catch((err) => console.debug(err))
  