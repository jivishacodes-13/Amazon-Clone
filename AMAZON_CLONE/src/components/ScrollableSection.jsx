// ScrollableSection.jsx - Horizontally scrollable product section with improved styling
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ScrollableSection = ({ title, icon, products, link, layout = 'scroll' }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="py-6 sm:py-8 px-2 sm:px-4 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Improved styling */}
        <div className="flex items-center justify-between mb-6 px-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl">{icon}</span>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-amazon-text">{title}</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Shop now</p>
            </div>
          </div>
          {link && (
            <Link
              to={link}
              className="text-amazon-orange hover:text-yellow-500 font-semibold text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap ml-2 hover:underline"
            >
              View All →
            </Link>
          )}
        </div>

        {/* Scrollable Container with better layout */}
        <div className="relative">
          {/* Left Arrow - Improved styling */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white via-white to-transparent p-2 hover:from-gray-50 hover:via-gray-50 transition hidden sm:flex items-center justify-center w-12 h-40 rounded-l-lg"
              aria-label="Scroll left"
            >
              <span className="text-2xl text-amazon-darkNav font-bold">‹</span>
            </button>
          )}

          {/* Product Container - Scrollable */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 scroll-smooth hide-scrollbar px-0 sm:px-12"
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-40 sm:w-48 md:w-56">
                <ProductItem product={product} />
              </div>
            ))}
          </div>

          {/* Right Arrow - Improved styling */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white via-white to-transparent p-2 hover:from-gray-50 hover:via-gray-50 transition hidden sm:flex items-center justify-center w-12 h-40 rounded-r-lg"
              aria-label="Scroll right"
            >
              <span className="text-2xl text-amazon-darkNav font-bold">›</span>
            </button>
          )}
        </div>

        {/* Mobile scroll indicator */}
        <div className="sm:hidden text-center text-xs text-gray-400 mt-2">
          ← Swipe to scroll →
        </div>
      </div>
    </section>
  );
};

export default ScrollableSection;
