import React from 'react';
import shopState from './shopState';
import PreviewCollection from '../../components/previewCollection/previewCollectionComponent';

class ShopPage extends React.Component {


    state = {
        collections: shopState
    }

    render() {
        console.log("shopPage component: ", this.props);
        const { collections } = this.state;
        console.log("shoppage: ", collections);
        return (
            <div>
                {collections.map(collection => {
                    return <PreviewCollection key={collection.id} {...collection} />
                })}
            </div>
        );
    }

}

export default ShopPage;