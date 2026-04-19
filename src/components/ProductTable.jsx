import React from 'react';
import { deleteProduct } from './Api';

const ProductTable = ({ products, onRefresh }) => {
    const handleDelete = async (id) => {
        await deleteProduct(id);
        onRefresh();
    };

    return (
        <div className="overflow-x-auto shadow rounded">
            <table className="w-full bg-white text-left border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3">Product</th><th className="p-3">Category</th>
                        <th className="p-3">Price</th><th className="p-3">Stock</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id} className="border-t hover:bg-gray-50">
                            <td className="p-3">{p.name}</td>
                            <td className="p-3">{p.category}</td>
                            <td className="p-3">₹{p.price}</td>
                            <td className="p-3">{p.stock}</td>
                            <td className="p-3">
                                <button onClick={() => handleDelete(p.id)} className="text-red-500 font-bold">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
