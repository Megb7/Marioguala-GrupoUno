import React from 'react';
import Item from "../Item/item.jsx";
import Loading from "../Loading/Loading.jsx";

const ItemList = ({ products, loading }) => {
    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemList;


