export interface ProductVolume {
  id: string;
  label: string;
  in_stock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  old_price: number;
  discount_percent: number;
  currency: string;
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  category: string;
  volumes: ProductVolume[];
  selected_volume_id: string;
}

export interface ProductApiResponse {
  success: boolean;
  data: {
    products: Product[];
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  const json: ProductApiResponse = await res.json();
  return json.data.products;
}
