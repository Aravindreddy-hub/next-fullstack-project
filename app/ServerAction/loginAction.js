'use server'
import DBconnection from "../utilis/config/db"
import UserModel from "../utilis/models/user"
import bcrypt from 'bcryptjs'

export async function loginAction(loginDetails){
  console.log("login server output detials",loginDetails)
  await DBconnection()

  const { email, password } = loginDetails
  const user = await UserModel.findOne({ email })
  if (!user) {
    throw new Error('Invalid email or password')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Invalid email or password')
  }

  // return minimal safe user data as plain JS values
  return { success: true, user: { id: String(user._id), username: String(user.username), email: String(user.email), role: String(user.role) }, redirect: { destination: '/dashboard', permanent: false } }
}