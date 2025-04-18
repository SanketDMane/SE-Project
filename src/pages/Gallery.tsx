import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

export const Gallery = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* FOOTER START */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

            {/* Products Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">PRODUCTS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Welding Electrode</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Flux Core Wire</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mig/Tig Wire</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">SAW Flux & Wires</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Strip Cladding</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">CSR Initiatives</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ's</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Certifications</a></li>
              </ul>
            </div>

            {/* Industries Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">INDUSTRIES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cement Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mining Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Marine Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Oil & Gas</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Power Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Railway Sector</a></li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">CONTACT US</h3>
              <address className="not-italic space-y-3">
                <div className="flex items-start">
                  <span className="w-5 h-5 mt-0.5 mr-3">📞</span>
                  <a href="tel:+918323733343" className="hover:text-white transition-colors duration-200">+91 8323733343</a>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 mt-0.5 mr-3">✉️</span>
                  <a href="mailto:info@rukminienterprises.com" className="hover:text-white transition-colors duration-200">info@rukminienterprises.com</a>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 mt-0.5 mr-3">📍</span>
                  <span>
                    72 B, Bombay Talkies Compound,<br />
                    Malad West, Mumbai 400064,<br />
                    Maharashtra, India
                  </span>
                </div>
              </address>

              {/* Socials */}
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.036-1.849-3.036-1.852 0-2.136 1.447-2.136 2.941v5.664H9.098V9h3.104v1.561h.043c.434-.823 1.494-1.692 3.075-1.692 3.289 0 3.894 2.165 3.894 4.981v6.602zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM6.764 20.452H3.911V9h2.853v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};
