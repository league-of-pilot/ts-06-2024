import { UsersDeco } from './UsersDeco'

export async function main34() {
  const users = new UsersDeco()

  const user = await users.getUser(22)
  console.log(`Got ${JSON.stringify(user)}`)

  await users.getUser(42)

  await users.getUsers()
}
