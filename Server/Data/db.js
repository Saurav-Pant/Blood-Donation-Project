const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    console.log('MongoDB connected')
  } catch (err) {
    console.error(err)
  }
}

const closeConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB close connection')
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  connectToDB: connectToDB,
  closeConnection: closeConnection,
}
