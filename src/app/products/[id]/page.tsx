// src/app/products/[id]/page.tsx
"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  rating: number; // Add a rating property
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          console.log(setError);
          if (!response.ok) {
            throw new Error('Error fetching product');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error: unknown) {
          const Error = error as Error;
          return Response.json({ error: Error.message }, { status: 500});
      } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-600">Product not found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg text-yellow-500 mb-4">
            Rating: {product.rating} ★
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300">
            Add to Cart
          </button>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
