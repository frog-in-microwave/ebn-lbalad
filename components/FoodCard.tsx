"use client";

import { KeyboardEvent, useState, useRef, useEffect } from "react";
import { Product } from "../types";

interface FoodCardProps {
  product: Product;
  offerText: string;
  fallbackImage: string;
  onSelect: (product: Product) => void;
}

export default function FoodCard({ product, offerText, fallbackImage, onSelect }: FoodCardProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [product.image, fallbackImage]);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(product);
    }
  };

  return (
    <article
      className="card"
      tabIndex={0}
      role="button"
      aria-label={product.name}
      onClick={() => onSelect(product)}
      onKeyDown={handleKeyDown}
    >
      <div className={`card-img-container ${isLoaded ? "loaded" : ""}`}>
        {!isLoaded && <div className="chicken-loader"></div>}
        <img 
          ref={imgRef}
          src={product.image || fallbackImage} 
          alt="" 
          loading="lazy" 
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </div>
      <div className="card-info">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">
          {product.price && product.price.trim() ? product.price : offerText}
        </p>
      </div>
    </article>
  );
}
