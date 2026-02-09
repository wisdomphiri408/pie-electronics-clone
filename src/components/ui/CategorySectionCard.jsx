import { Link } from "react-router-dom";
import { useState } from "react";

const CategorySectionCard = ({ section }) => {
  const {
    title = "Section Title",
    url = "#",
    categories = [],
  } = section || {};

  return (
    <div className="flex flex-col items-center border py-6 px-4 rounded-lg shadow-sm">
      {/* Title - renders immediately */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      
      {/* Grid of categories - text renders immediately */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* See more link - renders immediately */}
      <Link 
        to={url} 
        className="text-blue-600 hover:text-blue-800 mt-6 font-medium hover:underline"
      >
        See more →
      </Link>
    </div>
  );
};

// Separate component for lazy image loading
const CategoryItem = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Link
      to={item.url}
      className="flex flex-col items-center rounded-lg hover:scale-105 transition-transform duration-200"
    >
      {/* Image container with skeleton */}
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        {/* Skeleton/placeholder shows while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        
        {/* Lazy-loaded image */}
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.png";
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      
      {/* Category name - renders immediately */}
      <span className="font-medium mt-2 text-sm text-center text-gray-700">
        {item.name}
      </span>
    </Link>
  );
};

export default CategorySectionCard;