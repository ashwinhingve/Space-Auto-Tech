// components/ProductForm.js
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
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg space-y-4">
      <input
        type="text"
        name="id"
        value={product.id}
        onChange={handleChange}
        placeholder="ID"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
