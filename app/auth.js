import nextauth from "next-auth/next"
import creedientialprovider from "next-auth/providers/credentials"
export const { signin, signout, handler: { GET, POST } } = nextauth({
  providers: [
    creedientialprovider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to find the user
        const user = { id: 1, name: "User", email: "user@example.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})
