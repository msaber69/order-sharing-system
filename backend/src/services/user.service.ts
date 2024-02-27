import { User, UserAttributes } from '../models/User';
import jwt from 'jsonwebtoken';

interface UserWithPassword extends User {
    id: string;
    password: string;
}

export class UserService {
    async createUser(newUser: UserAttributes): Promise<User | null> {
        try {
            const createdUser = await User.create(newUser);
            return createdUser;
        } catch (error) {
            console.error('Error creating user:', error);
            return null;
        }
    }

    async getUserById(userId: string): Promise<User | null> {
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.error('Error retrieving user by ID:', error);
            return null;
        }
    }

    async getAllUsers(): Promise<User[] | null> {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.error('Error retrieving all users:', error);
            return null;
        }
    }

    async updateUser(userId: string, updatedUserData: Partial<UserAttributes>): Promise<User | null> {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return null;
            }
            await user.update(updatedUserData);
            return user;
        } catch (error) {
            console.error('Error updating user:', error);
            return null;
        }
    }

    async deleteUser(userId: string): Promise<boolean> {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return false;
            }
            await user.destroy();
            return true;
        } catch (error) {
            console.error('Error deleting user:', error);
            return false;
        }
    }

    async loginUser(username: string, password: string): Promise<string | null> {
      try {
          // Find user by username
          const user = await User.findOne({ where: { username } }) as UserWithPassword;
          if (!user) {
              return null; // User not found
          }
          
          // Verify password
          if (user.password !== password) {
              return null; // Incorrect password
          }
          
          // Generate JWT token
          const token = jwt.sign({ userId: user.id }, 'f6549e95c22db20c99e398dd612bd781fd9eff29d6d585159779de196dc1fab3', { expiresIn: '1h' });
          return token;
      } catch (error) {
          console.error('Error logging in user:', error);
          return null;
      }
    }

    async logout(token: string): Promise<void> {
      
    }
}
