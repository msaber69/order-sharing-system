import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import paymentRoutes from './routes/paymentRoutes';
import sessionRoutes from './routes/sessionRoutes';
import userRoutes from './routes/userRoutes';
import qrCodeRoutes from './routes/qrCodeRoutes';
import backofficeOrderRoutes from './routes/backofficeOrderRoutes';
import { sequelize } from './config/db';


const app = express();

// Set up middleware
app.use(express.json());

// Define routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/user', userRoutes);
app.use('/api/qrcode', qrCodeRoutes);
app.use('/api/backofficeorder', backofficeOrderRoutes);

// Database connection check endpoint
app.get('/api/database-status', async (req, res) => {
  try {
    await sequelize.authenticate(); // Try to authenticate with the database
    res.status(200).json({ message: 'Database connected' });
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ message: 'Database connection failed' });
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
