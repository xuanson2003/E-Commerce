import React from 'react';
import './RelatedProducts.scss';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
    return (
        <div className="related-products">
            <h1>Telated Products</h1>
            <hr />
            <div className="related-products-item">
                {data_product.map((item, index) => {
                    return <Item key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;
