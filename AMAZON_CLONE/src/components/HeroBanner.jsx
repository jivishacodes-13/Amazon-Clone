// Hero Banner Component - Amazon-style promotional banner with slider
import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  // Banner images/data with actual images
  const banners = [
    {
      id: 1,
      title: 'Best Deals on Electronics',
      subtitle: 'Save up to 50% off',
      image: 'https://i.pinimg.com/736x/0f/e9/82/0fe982c8df8fd7458173197f2b041394.jpg',
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 2,
      title: 'Fashion Mega Sale',
      subtitle: 'Latest trends at unbeatable prices',
      image: 'https://i.pinimg.com/736x/7d/c6/a7/7dc6a756efb9e6aee1729c13f28c51d1.jpg',
      color: 'from-pink-600 to-pink-800',
    },
    {
      id: 3,
      title: 'Home & Kitchen Essentials',
      subtitle: 'Transform your home today',
      image: 'https://i.pinimg.com/736x/e4/9c/57/e49c57b9d89b1820c1514a9660b0202b.jpg',
      color: 'from-green-600 to-green-800',
    },
    {
      id: 4,
      title: 'Beauty & Personal Care',
      subtitle: 'Premium quality products',
      image: 'https://i.pinimg.com/1200x/96/06/8d/96068d7de07ee784066851c09c7967f9.jpg',
      color: 'from-purple-600 to-purple-800',
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate banners every 6 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length, isAutoPlay]);

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="bg-amazon-lightGray py-2 md:py-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Slider */}
        <div 
          className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Banner Images */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-40`}></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-center drop-shadow-lg mb-4">
                  {banner.subtitle}
                </p>
                <button className="bg-amazon-orange text-amazon-text px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition duration-200 z-20 hidden sm:flex items-center justify-center text-xl"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition duration-200 z-20 hidden sm:flex items-center justify-center text-xl"
          >
            ›
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentBanner(index);
                  setIsAutoPlay(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentBanner 
                    ? 'bg-amazon-orange w-8 h-2' 
                    : 'bg-white bg-opacity-60 hover:bg-opacity-100 w-2 h-2'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
