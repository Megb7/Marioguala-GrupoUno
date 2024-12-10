import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { getProducts, filterProductsByCategory } from "../../Data/DataItem.jsx";
import Loading from "../Loading/Loading.jsx";

const ProductsCategory = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((data) => {
                if (selectedCategory === 'all') {
                    setFilteredProducts(data);
                } else {
                    setFilteredProducts(filterProductsByCategory(selectedCategory));
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener los productos:", err);
                setLoading(false); // Manejo de errores
            });
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="flex justify-center space-x-4 my-4">
                <button
                    onClick={() => handleCategoryChange('perifericos')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Periféricos
                </button>
                <button
                    onClick={() => handleCategoryChange('muebles')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Muebles
                </button>
                <button
                    onClick={() => handleCategoryChange('all')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Todos
                </button>
            </div>
            <ItemList products={filteredProducts} loading={loading} />
        </div>
    );
};

export default ProductsCategory;
