import Item from '../Item/Item';

function ItemList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;
