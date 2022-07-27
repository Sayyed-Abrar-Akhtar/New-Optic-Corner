// export class AddProductValidator {
//   constructor(
//     color,
//     sku,
//     stock,
//     images,
//     price,
//     title,
//     description,
//     tagsArr,
//     category_men,
//     category_women,
//     category_kid,
//     category_unisex
//   ) {
//     this.color = color || '';
//     this.sku = sku || '';
//     this.stock = stock || 0;
//     this.images = images || [];
//     this.title = title || '';
//     this.price = price || 0;
//     this.description = description || '';
//     this.tagsArr = tagsArr || [];
//     this.category_men = category_men || false;
//     this.category_women = category_women || false;
//     this.category_kid = category_kid || false;
//     this.category_unisex = category_unisex || false;

//     this.message = [];
//   }

//   variantValidator = () => {
//     if (this.color === '') {
//       this.message.push('Variant Color is missing!');
//     }
//     if (this.sku === '') {
//       this.message.push('Variant SKU is missing!');
//     }
//     if (this.images.length === 0) {
//       this.message.push('Variant images is missing!');
//     }
//     if (this.stock === 0) {
//       this.message.push('Variant stock is empty!');
//     }
//     if (this.price === 0) {
//       this.message.push('Variant price is missing!');
//     }

//     return this.message;
//   };

//   productValidator = () => {
//     if (this.title === '') {
//       this.message.push('Product title is required!');
//     }

//     if (this.description === '') {
//       this.message.push('Product description is required!');
//     }
//     if (this.tagsArr.length === 0) {
//       this.message.push('Tags is missing!');
//     }

//     return this.message;
//   };

//   categoryValidator = () => {
//     const arr = [];
//     if (this.category_men) arr.push['men'];
//     if (this.category_women) arr.push['women'];
//     if (this.category_kid) arr.push['kid'];
//     if (this.category_unisex) arr.push['unisex'];
//     return arr;
//   };
// }

const variantValidator = (color, sku, stock, images, price) => {
  message = [];
  if (color === '') {
    message.push('Variant Color is missing!');
  }
  if (sku === '') {
    message.push('Variant SKU is missing!');
  }
  if (stock === 0) {
    message.push('Variant stock is empty!');
  }
  if (images.length === 0) {
    message.push('Variant images is missing!');
  }
  if (price === 0) {
    message.push('Variant price is missing!');
  }

  return message;
};

const productValidator = (title, description, tagsArr) => {
  message = [];
  if (title === '') {
    message.push('Product title is required!');
  }

  if (description === '') {
    message.push('Product description is required!');
  }
  if (tagsArr.length === 0) {
    message.push('Tags is missing!');
  }

  return message;
};

const categoryValidator = (
  category_men,
  category_women,
  category_kid,
  category_unisex
) => {
  const arr = [];
  if (category_men) arr.push['men'];
  if (category_women) arr.push['women'];
  if (category_kid) arr.push['kid'];
  if (category_unisex) arr.push['unisex'];
  return arr;
};

export { variantValidator, productValidator, categoryValidator };
