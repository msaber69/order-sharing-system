import { User } from '../models/User';

const users: User[] = [];

export class UserService {
  createUser(userData: User): User {
    const newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
  }

  getUserByUsername(username: string): User | undefined {
    return users.find(user => user.username === username);
  }

  getAllUsers(): User[] {
    return users;
  }
}
