import React, { useState } from 'react';
import './NewCollections.scss';
import Item from '../Item/Item';
import { useEffect } from 'react';

const NewCollections = () => {
    const [new_collections, setNew_collection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then((res) => res.json())
            .then((data) => setNew_collection(data));
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
