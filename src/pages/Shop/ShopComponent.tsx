import React from 'react';
import PreviewCollection from '../../components/previewCollection/previewCollectionComponent';

import { connect } from 'react-redux';
import { selectData } from '../../redux/shopRedux/shopDataSelector';

class ShopPage extends React.Component<any> {

    render() {
        console.log("shopPage component: ", this.props);
        const { shopData } = this.props;
        return (
            <div>
                {shopData.map((item: any) => {
                    return <PreviewCollection key={item.id} {...item} />
                })}
            </div>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        shopData: selectData(state)
    }
}

export default connect(mapStateToProps)(ShopPage);