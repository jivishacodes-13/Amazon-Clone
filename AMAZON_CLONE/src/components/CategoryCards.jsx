// CategoryCards.jsx - Amazon-style category cards with improved responsiveness
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: '💻',
      image: 'https://i.pinimg.com/1200x/a1/50/cf/a150cffb12aa646d37489c2c4b3e0502.jpg',
      link: '/category/Electronics',
      color: 'from-blue-100 to-blue-200',
    },
    {
      id: 2,
      name: 'Fashion',
      icon: '👗',
      image: 'https://i.pinimg.com/736x/d2/31/e3/d231e3b6a413b702a812d4cb07a1e141.jpg',
      link: '/category/Fashion',
      color: 'from-pink-100 to-pink-200',
    },
    {
      id: 3,
      name: 'Home',
      icon: '🏠',
      image: 'https://i.pinimg.com/736x/f0/85/53/f08553bd944bd36a30dc9d2436ebfb4a.jpg',
      link: '/category/Home & Kitchen',
      color: 'from-amber-100 to-amber-200',
    },
    {
      id: 4,
      name: 'Mobiles',
      icon: '📱',
      image: 'https://i.pinimg.com/736x/ec/bd/c6/ecbdc6dd6fae8a81f47cfa2b932bc5c6.jpg',
      link: '/category/Mobiles',
      color: 'from-green-100 to-green-200',
    },
    {
      id: 5,
      name: 'Beauty',
      icon: '💄',
      image: 'https://i.pinimg.com/1200x/fd/24/e4/fd24e40e013301751ef5f567b3063c56.jpg',
      link: '/category/Beauty',
      color: 'from-purple-100 to-purple-200',
    },
    {
      id: 6,
      name: 'See More',
      icon: '➕',
      image: 'https://i.pinimg.com/736x/c7/ae/f6/c7aef651f4a7745197d47e45e45fe615.jpg',
      link: '/',
      color: 'from-gray-100 to-gray-200',
    },
  ];

  return (
    <div className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group block bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`relative w-full aspect-square overflow-hidden bg-gradient-to-br ${category.color}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-2 text-center bg-white border-t border-gray-200 group-hover:bg-amazon-lightGray transition-colors">
                <div className="text-base sm:text-xl mb-0.5">{category.icon}</div>
                <h3 className="text-xs sm:text-sm font-semibold text-amazon-text group-hover:text-amazon-orange transition-colors duration-200 line-clamp-1">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
