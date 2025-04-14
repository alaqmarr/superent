export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
  isFeatured: boolean;
  isArchived: boolean;
  sizeId: string;
  colorId: string;
  createdAt: string;
  updatedAt: string;
  images: ProductImage[];
  category: Category;
  size: Size;
  color: Color;
};

export type ProductImage = {
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  storeId: string;
  billboardId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Size = {
  id: string;
  storeId: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type Color = {
  id: string;
  storeId: string;
  name: string;
  value: string; // This could be more specific like `value: HexColor` if you want
  createdAt: string;
  updatedAt: string;
};

// For an array of products
export type Blogs = Blog[];