"use client";

import { siteText } from "../constants";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-maps-wrapper">
          <div className="footer-map-container">
            <div className="map-frame">
              <iframe
                title="Ibn Al Balad Hommos - Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8975698775453!2d35.3459019!3d33.504042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef3d2c74f1383%3A0xe014573afd3d302b!2sFoul%20Eben%20El%20Balad!5e0!3m2!1sen!2slb!4v1790628359426!5m2!1sen!2slb"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <h3 id="footer-title">{siteText.visitUs}</h3>
          <p id="footer-location">{siteText.location}</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/ebnalbalad1990?stkn=MXdhMno4OW1nbmNmcQ=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/9613805267"
              target="_blank"
              rel="noreferrer"
              aria-label="Whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:03805267"
              target="_blank"
              rel="noreferrer"
              aria-label="Phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" id="footer-bottom">
        {siteText.footerBottom}
      </div>
    </footer>
  );
}
