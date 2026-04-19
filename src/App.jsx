import React, { useState, useEffect } from 'react';
import { getProducts } from './components/Api'; // Path changed
import ProductForm from './components/ProductForm'; // Path changed
import ProductTable from './components/ProductTable'; // Path changed

function App() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="p-10 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-slate-800 border-b-2 pb-4">
          📦 Smart Inventory System
        </h1>

        {/* Form Component */}
        <section className="mb-10">
          <ProductForm onRefresh={loadData} />
        </section>

        {/* Table Component */}
        <section className="bg-white shadow-xl rounded-xl overflow-hidden">
          <ProductTable products={products} onRefresh={loadData} />
        </section>
      </div>
    </div>
  );
}

export default App;
