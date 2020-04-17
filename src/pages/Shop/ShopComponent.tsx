import React from 'react';
import CollectionsOverView from '../../components/collectionsOverView/collectionsOverViewComponent';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collectionComponent';

class ShopPage extends React.Component<any> {

    render() {
        console.log("shopPageComponent: ", this.props);
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverView} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }

}


export default ShopPage;