"use client";
import { useState } from "react";
import ProductForm from "./ProductForm";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);

  const handleSave = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="section">
        <div className="container-xl">
          <div className="max-w-2xl mb-8">
            <div className="section-label mb-4">Manage Catalog</div>
            <h1 className="section-heading-modern mb-4">Product Management Workspace</h1>
            <p className="section-copy-muted">Add new products and review recently added entries below.</p>
          </div>

          <div className="card mb-8">
            <ProductForm onSave={handleSave} />
          </div>

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <article key={product.id || `${product.name}-${product.price}`} className="card">
                  <h3 className="text-base font-semibold text-ink">{product.name}</h3>
                  <p className="text-sm text-ink/55">{product.category}</p>
                  <p className="text-sm text-cerulean font-semibold mt-2">{product.price}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink/50">No products added yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}