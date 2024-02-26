import { Product, ProductAttributes } from '../models/Product';

export class ProductService {
  async createProduct(newProductData: ProductAttributes): Promise<Product | null> {
    try {
      const newProduct = await Product.create(newProductData);
      return newProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      return null;
    }
  }

  async getProductById(productId: string): Promise<Product | null> {
    try {
      const product = await Product.findByPk(productId);
      return product;
    } catch (error) {
      console.error('Error retrieving product by ID:', error);
      return null;
    }
  }

  async getAllProducts(): Promise<Product[] | null> {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      console.error('Error retrieving all products:', error);
      return null;
    }
  }

  async updateProduct(productId: string, updatedProductData: Partial<ProductAttributes>): Promise<Product | null> {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        return null;
      }
      await product.update(updatedProductData);
      return product;
    } catch (error) {
      console.error('Error updating product:', error);
      return null;
    }
  }

  async deleteProduct(productId: string): Promise<boolean> {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        return false;
      }
      await product.destroy();
      return true;
    } catch (error) {
      console.error('Error deleting product:', error);
      return false;
    }
  }

  async getProductsByParkId(parkId: string): Promise<Product[] | null> {
    try {
      const products = await Product.findAll({ where: { parkId } });
      return products;
    } catch (error) {
      console.error('Error retrieving products by park ID:', error);
      return null;
    }
  }
}
