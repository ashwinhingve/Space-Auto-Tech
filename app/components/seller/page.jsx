"use client";
import { useState } from "react";

export default function SellerPage() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", image: null });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("saving");

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    if (product.image) formData.append("image", product.image);

    try {
      const response = await fetch("/api/products", { method: "POST", body: formData });
      if (!response.ok) {
        setStatus("error");
        return;
      }

      setProduct({ name: "", description: "", price: "", image: null });
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Product Manager</div>
            <h1 className="section-heading-modern mb-5">Add or Update Product Information</h1>
            <p className="section-copy-muted">Use this form to upload products for your catalog.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          <form onSubmit={handleSubmit} className="card space-y-4">
            <div>
              <label className="form-label" htmlFor="name">Product Name</label>
              <input id="name" name="name" value={product.name} onChange={handleChange} className="form-input" required />
            </div>
            <div>
              <label className="form-label" htmlFor="description">Description</label>
              <textarea id="description" name="description" value={product.description} onChange={handleChange} className="form-textarea" rows={4} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="price">Price</label>
                <input id="price" name="price" type="number" value={product.price} onChange={handleChange} className="form-input" required />
              </div>
              <div>
                <label className="form-label" htmlFor="image">Product Image</label>
                <input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} className="form-input" />
              </div>
            </div>
            <button type="submit" className="btn-primary" disabled={status === "saving"}>
              {status === "saving" ? "Saving..." : "Save Product"}
            </button>
            {status === "saved" ? <p className="text-sm text-forest">Product saved successfully.</p> : null}
            {status === "error" ? <p className="text-sm text-red-500">Failed to save product.</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
}