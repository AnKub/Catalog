import React, { useState } from 'react';
import './ProductCard.scss';
import type { ProductVolume, ProductCardProps } from './productTypes';

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
    const [showAdded, setShowAdded] = useState(false);

    const handleAddToCart = () => {
      setShowAdded(true);
      setTimeout(() => setShowAdded(false), 1800);
    };

  return (
      <div className="product-card" role="listitem" tabIndex={0} aria-label={`Product card: ${name}`}> 
        <div className="product-card__image">
        <img
              src={image ? image : '/public/product.png'}
              alt={name}
            />
        </div>
        <div className="product-card__price-row">
          <span className="product-card__old-price">{old_price} {currency}</span>
          <span className="product-card__price">{price} {currency}</span>
          <span className="product-card__discount">
            <img src="/src/assets/icons/discount-tag.svg" alt="Знижка" width={32} height={24} style={{ verticalAlign: 'middle' }} />
          </span>
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
          {volumes.length > 0 && (
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
          )}
            <button className="product-card__cart" onClick={handleAddToCart}>В корзину</button>
        </div>
          {showAdded && (
            <div className="product-card__added">Додано до корзини!</div>
          )}
      </div>
  );
};

export default ProductCard;
