"use client";

import { useState, useEffect, useMemo, MouseEvent } from "react";
import menuData from "../app/data/products.json";
import FoodCard from "./FoodCard";
import Header from "./Header";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { Category, Product } from "../types";
import { siteText, FALLBACK_IMAGE } from "../constants";

export default function MenuClient() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const categories = useMemo(() => {
    return [...(menuData.categories as Category[])].sort((a, b) => (a.order || 9999) - (b.order || 9999));
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>(
    categories.length > 0 ? categories[0].id : ""
  );

  const productsByCategory = useMemo(() => {
    const map: Record<string, Product[]> = {};
    (menuData.products as Product[]).forEach((p) => {
      if (p.isAvailable === false) return;
      if (!map[p.categoryId]) map[p.categoryId] = [];
      map[p.categoryId].push(p);
    });

    for (const key in map) {
      map[key].sort((a, b) => {
        const orderDiff = (a.order || 9999) - (b.order || 9999);
        if (orderDiff !== 0) return orderDiff;
        return a.name.localeCompare(b.name, "ar");
      });
    }
    return map;
  }, []);

  const handleScrollToCategory = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = document.getElementById("category-nav")?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navOffset = document.getElementById("category-nav")?.offsetHeight || 0;
      let currentId = activeCategory;
      
      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset + 50 && rect.bottom >= navOffset) {
            currentId = cat.id;
          }
        }
      }
      
      if (currentId !== activeCategory) {
         setActiveCategory(currentId);
         const activeLink = document.querySelector(`.nav-link[data-category-id="${currentId}"]`);
         if (activeLink) {
            activeLink.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
         }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories, activeCategory]);

  return (
    <>
      <Header />
      <nav id="category-nav" aria-label="Menu categories">
        <div className="nav-scroll-wrapper" id="nav-links">
          {categories.map((cat) => (
            <a
              key={cat.id}
              className={`nav-link ${activeCategory === cat.id ? "active" : ""}`}
              href={`#${cat.id}`}
              data-category-id={cat.id}
              onClick={(e) => handleScrollToCategory(e, cat.id)}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      <main id="menu-container">
        {categories.map((cat, i) => (
          <section key={cat.id} id={cat.id} className="category-section" data-category-id={cat.id}>
            {i !== 0 && <hr className="category-divider" />}
            <h2 className="category-title">{cat.name}</h2>
            
            <div className="grid">
              {(productsByCategory[cat.id] || []).map((product) => (
                <FoodCard
                  key={product.id}
                  product={product}
                  offerText={siteText.offer}
                  fallbackImage={FALLBACK_IMAGE}
                  onSelect={setActiveProduct}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <ItemModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  );
}
