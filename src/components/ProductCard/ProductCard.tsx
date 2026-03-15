import React, { useState } from 'react';
import './ProductCard.scss';

export interface ProductVolume {
  id: string;
  label: string;
  in_stock: boolean;
}

export interface ProductCardProps {
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

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  old_price,
  discount_percent,
  currency,
  rating,
  reviews_count,
  in_stock,
  category,
  volumes,
  selected_volume_id,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedVolume, setSelectedVolume] = useState(selected_volume_id);

  return (
    <div className="product-card" role="listitem" tabIndex={0} aria-label={`Product card: ${name}`}> 
      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__price-row">
        <span className="product-card__old-price">{old_price} {currency}</span>
        <span className="product-card__price">{price} {currency}</span>
        <span className="product-card__discount">-{discount_percent}%</span>
      </div>
      <div className="product-card__desc">
        <span className={showDescription ? 'product-card__desc-full' : 'product-card__desc-short'}>
          {name}
        </span>
        {!showDescription && (
          <button className="product-card__more" onClick={() => setShowDescription(true)}>
            ...
          </button>
        )}
      </div>
      <div className="product-card__rating-row">
        <div className="product-card__stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.round(rating) ? 'star star--active' : 'star'}>★</span>
          ))}
        </div>
        <span className="product-card__reviews">{reviews_count}</span>
      </div>
      <div className="product-card__info-row">
        <span className="product-card__instock">
          <span className="instock-dot">✔</span> В наличии
        </span>
        <span className="product-card__category">{category}</span>
      </div>
      <div className="product-card__actions">
        <select
          className="product-card__volumes"
          value={selectedVolume}
          onChange={e => setSelectedVolume(e.target.value)}
        >
          {volumes.map(v => (
            <option key={v.id} value={v.id} disabled={!v.in_stock}>
              {v.label}
            </option>
          ))}
        </select>
        <button className="product-card__cart">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
