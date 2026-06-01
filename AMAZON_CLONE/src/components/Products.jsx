// Products Component - Multiple product sections like Amazon
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  // Product sections with 4 products each (like real Amazon)
  const productSections = [
    {
      id: 1,
      title: 'Home Appliances',
      products: [
        { id: 1, name: 'Microwave Ovens', image: 'https://via.placeholder.com/150?text=Microwave', price: '3499' },
        { id: 2, name: 'Washing Machines', image: 'https://via.placeholder.com/150?text=Washer', price: '9999' },
        { id: 3, name: 'Refrigerators', image: 'https://via.placeholder.com/150?text=Fridge', price: '15999' },
        { id: 4, name: 'Air Coolers', image: 'https://via.placeholder.com/150?text=Cooler', price: '4999' },
      ],
    },
    {
      id: 2,
      title: 'Beauty & Personal Care',
      products: [
        { id: 5, name: 'Face Creams', image: 'https://via.placeholder.com/150?text=Cream', price: '299' },
        { id: 6, name: 'Hair Care', image: 'https://via.placeholder.com/150?text=Hair', price: '199' },
        { id: 7, name: 'Makeup Kits', image: 'https://via.placeholder.com/150?text=Makeup', price: '799' },
        { id: 8, name: 'Skincare Sets', image: 'https://via.placeholder.com/150?text=Skincare', price: '1299' },
      ],
    },
    {
      id: 3,
      title: 'Electronics & Accessories',
      products: [
        { id: 9, name: 'Headphones', image: 'https://via.placeholder.com/150?text=Headphones', price: '1299' },
        { id: 10, name: 'USB Cables', image: 'https://via.placeholder.com/150?text=Cable', price: '249' },
        { id: 11, name: 'Phone Chargers', image: 'https://via.placeholder.com/150?text=Charger', price: '599' },
        { id: 12, name: 'Power Banks', image: 'https://via.placeholder.com/150?text=PowerBank', price: '899' },
      ],
    },
    {
      id: 4,
      title: 'Fashion & Clothing',
      products: [
        { id: 13, name: 'Mens Shirts', image: 'https://via.placeholder.com/150?text=Shirt', price: '399' },
        { id: 14, name: 'Womens Sarees', image: 'https://via.placeholder.com/150?text=Saree', price: '999' },
        { id: 15, name: 'Kids Dresses', image: 'https://via.placeholder.com/150?text=Dress', price: '349' },
        { id: 16, name: 'Casual Shoes', image: 'https://via.placeholder.com/150?text=Shoes', price: '1499' },
      ],
    },
    {
      id: 5,
      title: 'Kitchen Essentials',
      products: [
        { id: 17, name: 'Cookware Sets', image: 'https://via.placeholder.com/150?text=Cookware', price: '1999' },
        { id: 18, name: 'Kitchen Knives', image: 'https://via.placeholder.com/150?text=Knives', price: '299' },
        { id: 19, name: 'Dinner Sets', image: 'https://via.placeholder.com/150?text=DinnerSet', price: '1499' },
        { id: 20, name: 'Water Bottles', image: 'https://via.placeholder.com/150?text=Bottle', price: '199' },
      ],
    },
    {
      id: 6,
      title: 'Books & Media',
      products: [
        { id: 21, name: 'Fiction Books', image: 'https://via.placeholder.com/150?text=Fiction', price: '199' },
        { id: 22, name: 'Self Help Books', image: 'https://via.placeholder.com/150?text=SelfHelp', price: '249' },
        { id: 23, name: 'Educational Books', image: 'https://via.placeholder.com/150?text=Education', price: '399' },
        { id: 24, name: 'Comics & Manga', image: 'https://via.placeholder.com/150?text=Comics', price: '99' },
      ],
    },
    {
      id: 7,
      title: 'Sports & Fitness',
      products: [
        { id: 25, name: 'Yoga Mats', image: 'https://via.placeholder.com/150?text=YogaMat', price: '499' },
        { id: 26, name: 'Dumbbells', image: 'https://via.placeholder.com/150?text=Dumbbells', price: '799' },
        { id: 27, name: 'Resistance Bands', image: 'https://via.placeholder.com/150?text=Bands', price: '299' },
        { id: 28, name: 'Sports Shoes', image: 'https://via.placeholder.com/150?text=SportsShoes', price: '2499' },
      ],
    },
    {
      id: 8,
      title: 'Home Decor',
      products: [
        { id: 29, name: 'Wall Paintings', image: 'https://via.placeholder.com/150?text=Painting', price: '499' },
        { id: 30, name: 'Bed Sheets', image: 'https://via.placeholder.com/150?text=Bedsheet', price: '699' },
        { id: 31, name: 'Curtains', image: 'https://via.placeholder.com/150?text=Curtain', price: '1299' },
        { id: 32, name: 'Decorative Lights', image: 'https://via.placeholder.com/150?text=Lights', price: '399' },
      ],
    },
  ];

  return (
    <div className="bg-amazon-lightGray py-4 px-2 md:px-4">
      <div className="max-w-full mx-auto">
        {/* Products Grid - Responsive layout */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {productSections.map((section) => (
            <ProductCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
