import React from 'react';
import CollectionsOverView from '../../components/collectionsOverView/collectionsOverViewComponent';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shopRedux/shopDataActions';
import { firestore, convertcollectionsSnapshotToMap } from '../../firebase/firebase.util';
import CollectionPage from '../collection/collectionComponent';
import withSpinner from '../../components/withSpinner/withSpinnerComponent';

class ShopPage extends React.Component<any> {

    state = {
        loading: true
    };

    unSubscribeFromSnapshot = null;

    componentDidMount = async () => {
        const collectionRef = firestore.collection("collections");
        // console.log("collectionRef shop: ", await collectionRef.doc("7csmdt92jEI0U7CeVQ4v").get());
        // whenever the collectionRef gets update, this onSnapshot() returns the updated version data.
        this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot: any) => {
            const collectionsMap = convertcollectionsSnapshotToMap(snapshot);
            console.log("collectionsMap: ", collectionsMap);
            this.props.shopData(collectionsMap);
            this.setState({ loading: false });
        }
        );
    }


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

const mapStateToDispatch = (dispatch: any) => {

    return {
        shopData: (collections: any) => { return dispatch(updateCollections(collections)) }
    }

}

export default connect(null, mapStateToDispatch)(ShopPage);