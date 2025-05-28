import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {

  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discountPercent = item.price > 50 ? 10 : 0;
  const discountedPrice = discountPercent
    ? (item.price * (100 - discountPercent)) / 100
    : item.price;

  return (
    <div className="relative bg-white rounded-2xl mt-[120px] border border-gray-200 flex flex-col overflow-hidden group">
      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs uppercase font-semibold px-2 py-1 rounded tracking-wider z-10">
        {item.category}
      </span>

      <div className="relative h-52 flex justify-center items-center overflow-hidden cursor-pointer group-hover:scale-110 transition-transform duration-500">
        <img onClick={(()=> navigate(`/${item.id}`))}
          src={item.image}
          alt={item.title}
          className="max-h-full object-contain"
          title={item.title}
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:underline cursor-pointer"
          title={item.title}
        >
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {showFullDesc
            ? item.description
            : item.description.length > 80
            ? item.description.slice(0, 80) + "..."
            : item.description}
          {item.description.length > 80 && (
            <button
              onClick={toggleDesc}
              className="ml-1 text-blue-600 hover:underline text-xs"
            >
              {showFullDesc ? "Hide" : "Read more"}
            </button>
          )}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            {discountPercent > 0 ? (
              <div className="flex items-baseline space-x-2">
                <span className="text-gray-400 line-through">${item.price.toFixed(2)}</span>
                <span className="text-lg font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
                <span className="text-xs font-semibold text-red-500">{discountPercent}% OFF</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</span>
            )}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-auto py-2 rounded-lg font-semibold text-white transition ${
            added ? "bg-green-500 cursor-default" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {added ? "Qo‘shildi!" : "Savatga qo‘shish"}
        </button>
      </div>
    </div>
  );
};

const Products = ({ data }) => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
