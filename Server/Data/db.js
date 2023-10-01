const mongoose = require('mongoose')

exports.connectToDB = async () => {
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
