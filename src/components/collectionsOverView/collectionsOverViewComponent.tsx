import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shopRedux/shopDataSelector';
import PreviewCollection from '../../components/previewCollection/previewCollectionComponent';

import './collectionsOverViewStyles.scss';


class CollectionsOverView extends React.Component<any>{


    render() {
        console.log("CollectionsOverView: ", this.props);
        const { shopData } = this.props;
        return (
            <div className="collections-overview">
                {shopData.map((item: any) => <PreviewCollection key={item.id} {...item} />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        shopData: selectCollectionForPreview(state)
    }
}


export default connect(mapStateToProps)(CollectionsOverView);