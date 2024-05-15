import React, { useState, useEffect } from 'react';
import './NewCollections.scss';
import Item from '../Item/Item';
import request from '~/utils/httpRequest';

const NewCollections = () => {
    const [new_collections, setNew_collection] = useState([]);

    useEffect(() => {
        request({
            method: 'get',
            url: 'newcollections',
        }).then((res) => {
            setNew_collection(res.data);
        });
    }, []);

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, index) => {
                    return <Item key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default NewCollections;
