import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { useFetch } from "../../hooks/usaFetch";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  const {data ,loading,error} = useFetch(`/products/${id}`)
return (
    <div className="container mx-auto px-4 py-10 my-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
          <p className="text-gray-600 text-lg">{data?.description}</p>
          <div className="text-4xl font-semibold text-green-600">
            ${data?.price}
          </div>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
