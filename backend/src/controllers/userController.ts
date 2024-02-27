import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { UserAttributes } from '../models/User';

const userService = new UserService();

export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser: UserAttributes = req.body;
            const createdUser = await userService.createUser(newUser);
            res.status(201).json(createdUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'An error occurred while creating user' });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Error getting user by ID:', error);
            res.status(500).json({ error: 'An error occurred while getting user by ID' });
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).json({ error: 'An error occurred while getting all users' });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            const updatedUserData: Partial<UserAttributes> = req.body;
            const updatedUser = await userService.updateUser(userId, updatedUserData);
            if (!updatedUser) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'An error occurred while updating user' });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            const isDeleted = await userService.deleteUser(userId);
            if (!isDeleted) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'An error occurred while deleting user' });
        }
    }

    async loginUser(req: Request, res: Response): Promise<void> {
      try {
          const { username, password } = req.body;
          const token = await userService.loginUser(username, password);
          if (!token) {
              res.status(401).json({ error: 'Invalid credentials' });
              return;
          }
          res.status(200).json({ token });
      } catch (error) {
          console.error('Error logging in user:', error);
          res.status(500).json({ error: 'An error occurred while logging in user' });
      }
    }

    async logout(req: Request, res: Response): Promise<void> {
      try {
          // Extract token from request headers or body
          const token = req.headers.authorization || req.body.token;
          if (!token) {
              res.status(400).json({ error: 'Token is required for logout' });
              return;
          }
          await userService.logout(token);
          res.status(200).json({ message: 'Logout successful' });
      } catch (error) {
          console.error('Error logging out user:', error);
          res.status(500).json({ error: 'An error occurred while logging out user' });
      }
    }
}
