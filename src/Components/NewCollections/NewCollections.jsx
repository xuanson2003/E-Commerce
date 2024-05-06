import React from 'react';
import './NewCollections.scss';
import new_collections from '~/Components/Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
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
