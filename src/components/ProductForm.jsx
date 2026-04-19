import React, { useState } from 'react';
import { addProduct } from './Api';

const ProductForm = ({ onRefresh }) => {
    const [formData, setFormData] = useState({
        name: '', category: '', price: '', stock: '', supplier: '', dateAdded: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(formData);
        setFormData({ name: '', category: '', price: '', stock: '', supplier: '', dateAdded: '' });
        onRefresh(); // Refresh the list after adding
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow grid grid-cols-2 gap-4 mb-8">
            <input name="name" placeholder="Product Name" className="border p-2" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} required />
            <input name="category" placeholder="Category" className="border p-2" onChange={(e) => setFormData({ ...formData, category: e.target.value })} value={formData.category} />
            <input name="price" type="number" placeholder="Price" className="border p-2" onChange={(e) => setFormData({ ...formData, price: e.target.value })} value={formData.price} />
            <input name="stock" type="number" placeholder="Stock" className="border p-2" onChange={(e) => setFormData({ ...formData, stock: e.target.value })} value={formData.stock} />
            <input name="supplier" placeholder="Supplier" className="border p-2" onChange={(e) => setFormData({ ...formData, supplier: e.target.value })} value={formData.supplier} />
            <input name="dateAdded" type="date" className="border p-2" onChange={(e) => setFormData({ ...formData, dateAdded: e.target.value })} value={formData.dateAdded} />
            <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded">Add Product</button>
        </form>
    );
};

export default ProductForm;
