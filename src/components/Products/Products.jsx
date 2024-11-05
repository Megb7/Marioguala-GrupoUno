import { useEffect, useState } from 'react';
import { fetchProducts } from '../../data/asyncMocks';
import ItemList from '../ItemList/ItemList';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div className="p-4 max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Nuestros Productos</h2>
            <ItemList products={products} />
        </div>
    );
}

export default Products;
