// pages/manage-products.js
'use client'
import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./page";
// import PrecisionIrrigation from  "@/app/components/product/PrecisionIrrigation"

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const handleSave = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <>
    <div className='h-20'></div>
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold mb-8">Manage Products</h1>
      <ProductForm onSave={handleSave} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ManageProducts;
