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
  if (!isProductApiResponse(json)) throw new Error('Invalid API response structure');
  return json.data.products;
}
// це оптціонально додав, для перевірки данних що надходять=))
function isProductApiResponse(obj: any): obj is ProductApiResponse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.success === 'boolean' &&
    typeof obj.data === 'object' &&
    Array.isArray(obj.data.products) &&
    obj.data.products.every(isProduct)
  );
}

function isProduct(obj: any): obj is Product {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.slug === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.image === 'string' &&
    typeof obj.price === 'number' &&
    typeof obj.old_price === 'number' &&
    typeof obj.discount_percent === 'number' &&
    typeof obj.currency === 'string' &&
    typeof obj.rating === 'number' &&
    typeof obj.reviews_count === 'number' &&
    typeof obj.in_stock === 'boolean' &&
    typeof obj.category === 'string' &&
    Array.isArray(obj.volumes) &&
    obj.volumes.every(isProductVolume) &&
    typeof obj.selected_volume_id === 'string'
  );
}

function isProductVolume(obj: any): obj is ProductVolume {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.label === 'string' &&
    typeof obj.in_stock === 'boolean'
  );
}
