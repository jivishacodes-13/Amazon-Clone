// HomePage.jsx - Main homepage with hero banner, category cards, and products
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import CategoryCards from '../components/CategoryCards';
import ScrollableSection from '../components/ScrollableSection';
import { getBestSellers, getTodaysDeals, getProductsByCategory } from '../data/productsData';

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [todaysDeals, setTodaysDeals] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [fashion, setFashion] = useState([]);
  const [homeKitchen, setHomeKitchen] = useState([]);
  const [beauty, setBeauty] = useState([]);

  useEffect(() => {
    // Load products on mount
    setBestSellers(getBestSellers());
    setTodaysDeals(getTodaysDeals());
    setElectronics(getProductsByCategory('Electronics'));
    setFashion(getProductsByCategory('Fashion'));
    setHomeKitchen(getProductsByCategory('Home & Kitchen'));
    setBeauty(getProductsByCategory('Beauty'));
  }, []);

  return (
    <div className="bg-amazon-lightGray min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Category Cards */}
      <CategoryCards />

      {/* Today's Deals Section - Scrollable */}
      <ScrollableSection
        title="Today's Deals & Discounts"
        icon="⚡"
        products={todaysDeals}
        link="/deals"
      />

      {/* Best Sellers Section - Scrollable */}
      <ScrollableSection
        title="Best Sellers"
        icon="⭐"
        products={bestSellers}
        link="/bestsellers"
      />

      {/* Electronics Section - Scrollable */}
      <ScrollableSection
        title="Electronics & Accessories"
        icon="💻"
        products={electronics}
        link="/category/Electronics"
      />

      {/* Fashion Section - Scrollable */}
      <ScrollableSection
        title="Fashion & Apparel"
        icon="👗"
        products={fashion}
        link="/category/Fashion"
      />

      {/* Home & Kitchen Section - Scrollable */}
      <ScrollableSection
        title="Home & Kitchen Essentials"
        icon="🏠"
        products={homeKitchen}
        link="/category/Home & Kitchen"
      />

      {/* Beauty Section - Scrollable */}
      <ScrollableSection
        title="Beauty & Personal Care"
        icon="💄"
        products={beauty}
        link="/category/Beauty"
      />

      {/* Promotional Banner Section */}
      <section className="py-6 sm:py-8 px-2 sm:px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Banner 1 */}
            <Link to="/deals" className="group relative overflow-hidden rounded-lg">
              <div className="h-40 sm:h-56 bg-gradient-to-r from-amazon-darkNav to-amazon-secNav flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-xs sm:text-sm mb-2">Limited Time Offer</p>
                  <h3 className="text-lg sm:text-2xl font-bold mb-3">Up to 50% Off</h3>
                  <button className="bg-amazon-orange text-amazon-text px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>

            {/* Banner 2 */}
            <Link to="/category/Electronics" className="group relative overflow-hidden rounded-lg">
              <div className="h-40 sm:h-56 bg-gradient-to-r from-amazon-secNav to-amazon-darkNav flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-xs sm:text-sm mb-2">New Arrivals</p>
                  <h3 className="text-lg sm:text-2xl font-bold mb-3">Electronics</h3>
                  <button className="bg-amazon-orange text-amazon-text px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition">
                    Explore
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
