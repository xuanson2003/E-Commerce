import React, { useState, useEffect } from 'react';
import './Popular.scss';
import Item from '~/Components/Item/Item';
import request from '~/utils/httpRequest';

const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        request({
            method: 'get',
            url: 'poppularinwomen',
        }).then((res) => {
            setPopularProducts(res.data);
        });
    }, []);
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item, index) => {
                    return <Item key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Popular;
