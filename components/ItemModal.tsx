"use client";

import { useState, useEffect, useRef } from "react";
import { Product } from "../types";
import { siteText, FALLBACK_IMAGE } from "../constants";

interface ItemModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ItemModal({ product, onClose }: ItemModalProps) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [prevProduct, setPrevProduct] = useState<Product | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  if (product?.id !== prevProduct?.id) {
    setPrevProduct(product);
    setIsImgLoaded(false);
  }

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsImgLoaded(true);
    }
  }, [product]);

  return (
    <div id="item-modal" className={`modal ${product ? "active" : ""}`} aria-hidden={!product}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="close-btn" type="button" aria-label="Close modal" onClick={onClose}>×</button>
        
        {product && (
          <>
            <div className={`modal-img-container ${isImgLoaded ? "loaded" : ""}`}>
              {!isImgLoaded && <div className="chicken-loader"></div>}
              <img 
                ref={imgRef}
                src={product.image || FALLBACK_IMAGE} 
                alt="" 
                id="modal-img" 
                onLoad={() => setIsImgLoaded(true)} 
                onError={() => setIsImgLoaded(true)}
              />
            </div>
            <div className="modal-text">
              <h2 id="modal-title">{product.name}</h2>
              <p id="modal-price" className="modal-price">
                {product.price && product.price.trim() ? product.price : siteText.offer}
              </p>
              <p id="modal-desc">
                {product.description ? product.description : siteText.defaultDescription}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
