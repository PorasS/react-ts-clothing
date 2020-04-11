//maintains state of menu items
import React from 'react';
import MenuItem from '../menu-item/menu-itemComponent';
import "./directoryStyles.scss";
import { directoryState } from './directoryState';

class Directory extends React.Component {

    state = directoryState;

    render(): any {
        console.log("Directiory state: ", this.state)
        return (
            <div className="directory-menu">{this.state.section.map(sec => <MenuItem prop={sec} key={sec.id} />)}
            </div>
        );
    }


}

export default Directory;