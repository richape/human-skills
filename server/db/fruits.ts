import connection from './connection.ts'
import { User } from '../../models/Users.ts'

export async function getAllUsers(db = connection): Promise<User[]> {
  return db('user').select()
}
