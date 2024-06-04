import { delay } from './utils'

export class UsersDeco {
  async getUsers() {
    return await delay(1000, [])
  }

  async getUser(id: number) {
    return await delay(50, {
      id: `user:${id}`
    })
  }
}
