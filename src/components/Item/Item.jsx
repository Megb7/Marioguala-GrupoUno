function Item({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition-colors">
                Añadir al Carrito
            </button>
        </div>
    );
}

export default Item;
