# Amazon Clone - ReactJS + Tailwind CSS

A responsive Amazon India homepage clone built with **ReactJS** and **Tailwind CSS**. This project demonstrates modern web development practices with clean, reusable components and beautiful responsive design.

## 🎯 Features

- ✅ **Fully Responsive Design** - Mobile (1 col), Tablet (2 cols), Desktop (4 cols)
- ✅ **Amazon-Style Navbar** - With search bar, account menu, and cart
- ✅ **Hero Banner** - Attractive promotional section with gradient background
- ✅ **Product Grid** - Responsive product cards with hover effects
- ✅ **Modern UI** - Using Tailwind CSS utility classes
- ✅ **Beginner-Friendly Code** - Well-commented and easy to understand
- ✅ **Amazon Color Scheme** - Blue, black, and orange theme
- ✅ **Interactive Elements** - Hover effects on buttons and cards

## 📁 Project Structure

```
AMAZON_CLONE/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Header with search and navigation
│   │   ├── HeroBanner.jsx       # Promotional banner section
│   │   ├── Products.jsx         # Product grid with sample data
│   │   ├── ProductCard.jsx      # Individual product card component
│   │   └── Footer.jsx           # Amazon-style footer
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # Project documentation
```

## 🚀 How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile** (< 640px): 1 product per row
- **Tablet** (640px - 1024px): 2 products per row
- **Desktop** (> 1024px): 4 products per row

## 🎨 Component Breakdown

### Navbar Component
- Amazon logo with ".in" extension
- Search bar (hidden on mobile)
- Account & Lists menu
- Returns & Orders menu
- Shopping cart with item count
- Category navigation bar

### Hero Banner Component
- Welcome heading
- Promotional message
- Shop Now button
- Feature cards (Free Shipping, Easy Returns, Secure Payment)

### Product Grid Component
- Displays 8 sample products
- Responsive grid layout
- Section title with emoji
- View More Products button

### Product Card Component
- Product image
- Product title
- Star rating with review count
- Price with discount percentage
- Add to Cart button
- Buy Now button
- Hover scale and shadow effects

### Footer Component
- Back to Top button
- Multiple footer sections (Get to Know Us, Connect With Us, etc.)
- Social media links
- Policies and links
- Copyright information

## 🎨 Tailwind CSS Classes Used

**Responsive Classes:**
- `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-4`
- `hidden md:flex`, `flex-wrap md:flex-row`

**Styling Classes:**
- `bg-gradient-to-r`, `shadow-lg`, `rounded-lg`
- `hover:bg-yellow-500`, `hover:scale-105`
- `text-2xl md:text-4xl lg:text-5xl`

**Spacing:**
- `px-4`, `py-3`, `gap-4`, `mb-4`, `mt-12`

## 📝 Sample Product Data

The Products component includes 8 sample products with:
- Title
- Price (₹)
- Discount percentage
- Placeholder images from placeholder service

You can easily replace these with real product data or API calls.

## 🔧 Customization

### Add More Products
Edit the `products` array in `Products.jsx`:

```jsx
const products = [
  {
    id: 1,
    title: 'Your Product',
    price: 1299,
    discount: 25,
    image: 'your-image-url',
  },
  // Add more products...
];
```

### Change Color Scheme
Edit `tailwind.config.js` to customize colors:

```js
colors: {
  amazon: {
    blue: '#1f8dd8',
    orange: '#ff9900',
    black: '#232f3e',
    // Add your custom colors
  },
}
```

### Add Functionality
- Connect to a backend API for real products
- Add cart management with Context API
- Implement authentication
- Add product filtering and sorting

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

## 💡 Tips for Students

1. **Understand Components** - Each file is a separate component. Learn how they work together.
2. **Tailwind Classes** - Use Tailwind instead of custom CSS. It's faster and cleaner.
3. **Responsive Design** - Always use `md:`, `lg:` prefixes for responsive behavior.
4. **Props** - ProductCard component uses props. Understand how data flows.
5. **Reusability** - Each component can be reused or modified for other projects.

## 🤝 Contributing

Feel free to modify this project for learning purposes or add new features!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Coding! 🚀**
