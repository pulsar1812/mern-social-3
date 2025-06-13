const mongoose = require('mongoose')

const keys = require('./keys')

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI)

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failue
    process.exit(1)
  }
}

module.exports = connectDB
