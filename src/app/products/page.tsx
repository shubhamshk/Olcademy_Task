// src/app/products/page.tsx
"use client"; // Ensure this is a client component
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Initialize with an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Ensure this endpoint returns an array of products
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        setProducts(data); // Ensure this data is an array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length === 0 ? ( // Check if products array is empty
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={product.images[0]} // Display the first image
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
