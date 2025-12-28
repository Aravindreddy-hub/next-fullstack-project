import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  verifytoken: {
    type: String,
    required: false,
  },
}, { timestamps: true })

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)

export default UserModel