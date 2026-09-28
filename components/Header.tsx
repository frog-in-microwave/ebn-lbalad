"use client";

import { siteText } from "../constants";

export default function Header() {
  return (
    <header className="brand-hero">
      <div className="brand-content">
        <div className="logo">
          <img
            src="/data/layout_images/logo_pic.avif"
            alt="Ibn Al Balad Hommos Logo"
            className="restaurant-logo"
          />
        </div>

        <div className="phone-container">
          <a className="phone-number" href="tel:03805267">
            <span className="phone-loc">الهاتف</span>
            <span className="phone-val" dir="ltr">
              03 / 805 267
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
