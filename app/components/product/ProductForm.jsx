import { useState } from "react";

const ProductForm = ({ onSave }) => {
  const [product, setProduct] = useState({
    id: "",
    category: "",
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({ id: "", category: "", name: "", price: "", image: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="id">Product ID</label>
          <input id="id" type="text" name="id" value={product.id} onChange={handleChange} placeholder="ID" className="form-input" required />
        </div>
        <div>
          <label className="form-label" htmlFor="category">Category</label>
          <input id="category" type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="form-input" required />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" className="form-input" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label" htmlFor="price">Price</label>
          <input id="price" type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="form-input" required />
        </div>
        <div>
          <label className="form-label" htmlFor="image">Image URL</label>
          <input id="image" type="url" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="form-input" required />
        </div>
      </div>
      <button type="submit" className="btn-primary">Save Product</button>
    </form>
  );
};

export default ProductForm;
