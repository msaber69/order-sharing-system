import express from 'express';
import { ProductController } from '../controllers/productController';
import { ProductService } from '../services/product.service';

const router = express.Router();
const productService = new ProductService();
const productController = new ProductController(productService);

router.post('/', productController.createProduct);
router.get('/:productId', productController.getProductById);
router.get('/', productController.getAllProducts);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
router.get('/park/:parkId', productController.getProductsByParkId);

export default router;
