import React, { FormHTMLAttributes } from 'react';
import CollectionItem from '../../components/collectionItem/collectionItemComponent';
import './previewCollectionStyle.scss';


const PreviewCollection = (props: any): JSX.Element => {
    console.log("preview collection: ", props)
    const { id, title, items } = props;
    return (
        <div className="collection-preview" key={id}>
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item: any, index: number) => index < 4).map((item: any) => {
                    return (<CollectionItem key={item.id} {...item} />);
                })}
            </div>
        </div >
    );
}

export default PreviewCollection;