import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { ProductAttributes } from '../models/Product';

const productService = new ProductService();

export class ProductController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }
    
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const newProductData: ProductAttributes = req.body;
      const newProduct = await productService.createProduct(newProductData);
      if (!newProduct) {
        res.status(500).json({ error: 'Failed to create product' });
        return;
      }
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'An error occurred while creating product' });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { productId } = req.params;
      const product = await productService.getProductById(productId);
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error getting product by ID:', error);
      res.status(500).json({ error: 'An error occurred while getting product by ID' });
    }
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      if (!products) {
        res.status(500).json({ error: 'Failed to get products' });
        return;
      }
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting all products:', error);
      res.status(500).json({ error: 'An error occurred while getting all products' });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { productId } = req.params;
      const updatedProductData: Partial<ProductAttributes> = req.body;
      const updatedProduct = await productService.updateProduct(productId, updatedProductData);
      if (!updatedProduct) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'An error occurred while updating product' });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { productId } = req.params;
      const isDeleted = await productService.deleteProduct(productId);
      if (!isDeleted) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'An error occurred while deleting product' });
    }
  }

  async getProductsByParkId(req: Request, res: Response): Promise<void> {
    try {
      const { parkId } = req.params;
      const products = await productService.getProductsByParkId(parkId);
      if (!products) {
        res.status(500).json({ error: 'Failed to get products by park ID' });
        return;
      }
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting products by park ID:', error);
      res.status(500).json({ error: 'An error occurred while getting products by park ID' });
    }
  }
}
