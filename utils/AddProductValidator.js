export class AddProductValidator {
  constructor(color, sku, stock, images, title, price, description, category) {
    this.color = color || '';
    this.sku = sku || '';
    this.stock = stock || 0;
    this.images = images || [];
    this.title = title || '';
    this.price = price || 0;
    this.description = description || '';
    this.category = category || '';
    this.message = [];
  }

  variantValidator = () => {
    if (this.color === '') {
      this.message.push('Variant Color is missing!');
    }
    if (this.sku === '') {
      this.message.push('Variant SKU is missing!');
    }
    if (this.images.length === 0) {
      this.message.push('Variant images is missing!');
    }
    if (this.stock === 0) {
      this.message.push('Variant stock is empty!');
    }
    if (this.price === 0) {
      this.message.push('Variant price is missing!');
    }

    return this.message;
  };

  productValidator = () => {
    if (this.title === '') {
      this.message.push('Product title is required!');
    }

    if (this.description === '') {
      this.message.push('Product description is required!');
    }
    if (this.category === '5') {
      this.message.push('Product has no stock!');
    }

    return this.message;
  };
}
