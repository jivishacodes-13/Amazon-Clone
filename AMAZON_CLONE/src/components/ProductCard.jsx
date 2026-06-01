// ProductCard Component - Amazon-style section card with 4 product images
import React from 'react';

const ProductCard = ({ section }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition">
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-bold text-amazon-text">{section.title}</h3>
      </div>

      {/* 4-Product Grid */}
      <div className="grid grid-cols-2 gap-2 p-3">
        {section.products.map((product, idx) => (
          <div key={idx} className="flex flex-col items-center hover:opacity-80 transition cursor-pointer">
            {/* Product Image */}
            <div className="w-full aspect-square bg-gray-100 rounded-sm mb-1 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Name */}
            <p className="text-xs text-amazon-text text-center line-clamp-2">{product.name}</p>
            {/* Price */}
            {product.price && (
              <p className="text-xs font-semibold text-amazon-text mt-1">₹{product.price}</p>
            )}
          </div>
        ))}
      </div>

      {/* See More Link */}
      <div className="px-4 py-2 border-t border-gray-200">
        <a href="#" className="text-amazon-orange text-sm font-semibold hover:text-blue-600 transition">
          See more
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
