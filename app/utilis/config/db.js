import mongoose from 'mongoose'


const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  console.warn('Warning: MONGO_URI is not set. DB connection will fail until it is provided in your environment.')
}

let cached = global._mongoose

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

const DBconnection = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined')
    }
    cached.promise = mongoose.connect(MONGO_URI).then((mongooseInstance) => {
      return mongooseInstance
    })
  }

  cached.conn = await cached.promise
  console.log('DB connected')
  return cached.conn
}

export default DBconnection