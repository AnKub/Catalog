import React from 'react';
import ProductCard from '../ProductCard';
import './ProductGrid.scss';
import type { ProductCardProps } from '../ProductCard/ProductCard';


interface ProductGridProps {
  products: ProductCardProps[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="product-grid" role="list" aria-label="Product grid">
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductGrid;
