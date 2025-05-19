import api from './axios';

export const fetchProducts = async (page: number, limit = 10, category?: string) => {
  const skip = page * limit;
  const url = category
    ? `/products/category/${category}?limit=${limit}&skip=${skip}`
    : `/products?limit=${limit}&skip=${skip}`;

  const res = await api.get(url);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await api.get('/products/categories');
  return res.data;
};
