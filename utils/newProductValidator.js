const variantValidator = (color, sku, stock, images, price) => {
  const message = [];
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

  if (message.length > 0) {
    return { isValid: false, message };
  } else {
    return { isValid: true };
  }
};

const productValidator = (
  title,
  description,
  tagsArr,
  categories,
  variantObjArr,
  product_type
) => {
  const message = [];
  if (title === '') {
    message.push('Product title is required!');
  }

  if (description === '') {
    message.push('Product description is required!');
  }
  if (tagsArr.length === 0) {
    message.push('Tags is missing!');
  }
  if (categories.length === 0) {
    message.push('Category is missing!');
  }

  if (variantObjArr.length === 0) {
    message.push('Variant is missing!');
  }

  if (product_type === '') {
    message.push('Product type must be chosen!');
  }

  if (message.length > 0) {
    return { isValid: false, message };
  } else {
    return { isValid: true };
  }
};

const categorySelector = (
  category_men,
  category_women,
  category_kid,
  category_unisex
) => {
  const arr = [];
  if (category_men) arr.push('men');
  if (category_women) arr.push('women');
  if (category_kid) arr.push('kid');
  if (category_unisex) arr.push('unisex');

  return arr;
};

export { variantValidator, productValidator, categorySelector };
