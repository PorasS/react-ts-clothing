//maintains state of menu items
import React from 'react';
import MenuItem from '../menu-item/menu-itemComponent';
import "./directoryStyles.scss";

import { connect } from 'react-redux';

import { selectDirectorySection } from '../../redux/directoryRedux/directorySelector';

class Directory extends React.Component<any> {

    render(): any {
        console.log("Directiory state: ", this.state);
        console.log("Directiory state from redux store: ", this.props);
        const { directorySection } = this.props;
        return (
            <div className="directory-menu">{directorySection.map((sec: any) => <MenuItem prop={sec} key={sec.id} />)}
            </div>
        );
    }


}

const mapStateToProps = (state: any) => {

    return {
        directorySection: selectDirectorySection(state)
    }
}

export default connect(mapStateToProps)(Directory);