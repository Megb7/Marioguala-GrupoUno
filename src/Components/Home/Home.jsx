import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../Data/DataItem.jsx";

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => {
                console.log("Productos obtenidos:", data);
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener los productos:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto max-w-[1170px]">
            <ItemList products={products} loading={loading} />
        </div>
    );
}
