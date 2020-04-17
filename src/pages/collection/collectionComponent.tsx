import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/collectionItemComponent';

import { selectCollection } from '../../redux/shopRedux/shopDataSelector';

import './collectionStyles.scss';

class CollectionPage extends React.Component<any>{
    render() {
        console.log("Category Page: ", this.props);
        const { title, items } = this.props.collection;
        return (
            <div className="collection-page">
                <h2 className="title">{title}</h2>
                <div className="items">
                    {
                        items.map((item: any) => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);