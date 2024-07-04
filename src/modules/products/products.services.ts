import { TProducts } from './products.interface';
import { Product } from './products.model';

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProductsFormDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const searchProductFromDB = async (searchTerm: any) => {
  const result = await Product.find({
    $or: [
      { name: new RegExp(searchTerm, 'i') },
      { description: new RegExp(searchTerm, 'i') },
      { category: new RegExp(searchTerm, 'i') },
      { tags: new RegExp(searchTerm, 'i') },
    ],
  });

  return result;
};

const deletePrductFormDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};
const updateProductFormDB = async (
  productId: string,
  payload: Partial<TProducts>,
) => {
  const { tags, variants, inventory, ...remainingProductData } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingProductData,
  };

  // Handling Object Update
  if (inventory && Object.keys(inventory)) {
    for (const [key, value] of Object.entries(inventory)) {
      modifiedUpdateData[`inventory.${key}`] = value;
    }
  }
  // Handling array updates
  if (tags && Array.isArray(tags)) {
    modifiedUpdateData['tags'] = tags;
  }
  // Handling Array of Object Data Update
  if (variants && Array.isArray(variants)) {
    modifiedUpdateData['variants'] = variants.map((variant, index) => {
      const variantUpdates: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(variant)) {
        variantUpdates[`variants.${index}.${key}`] = value;
      }
      return variantUpdates;
    });
  }
  // Data Update into Database
  const result = await Product.findByIdAndUpdate(
    productId,
    modifiedUpdateData,
    {
      new: true,
    },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFormDB,
  getSingleProductFromDB,
  searchProductFromDB,
  deletePrductFormDB,
  updateProductFormDB,
};
