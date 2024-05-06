import React from 'react';
import './Item.scss';

const Item = ({ data }) => {
    return (
        <div className="item">
            <img src={data.image} alt="" />
            <p>{data.name}</p>
            <div className="item-prices">
                <div className="item-price-new">${data.new_price}</div>
                <div className="item-price-old">${data.old_price}</div>
            </div>
        </div>
    );
};

export default Item;
