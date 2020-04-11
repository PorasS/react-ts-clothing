import React from 'react';
import './collectionItemStyles.scss';

const CollectionItem = (props: any) => {

    const { name, imageUrl, price } = props;
    console.log("collection Items: ", props);
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;