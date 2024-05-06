import React from 'react';
import './Popular.scss';
import data_product from '~/Components/Assets/data';
import Item from '~/Components/Item/Item';

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, index) => {
                    return <Item key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Popular;
