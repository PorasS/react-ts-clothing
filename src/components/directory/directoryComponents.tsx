//maintains state of menu items
import React from 'react';
import MenuItem from '../menu-item/menu-itemComponent';
import "./directoryStyles.scss"

type section = { title: string, imageUrl: string, id: number, linkUrl: string, size: string }

type dir = {
    section: Array<section>
}

class Directory extends React.Component {

    state: dir = {
        section: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats',
                size: ''
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets',
                size: ''
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers',
                size: ''
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                linkUrl: 'shop/womens',
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                linkUrl: 'shop/mens',
                size: 'large'
            }
        ]
    }

    render(): any {
        return (
            <div className="directory-menu">{this.state.section.map(sec => <MenuItem prop={sec} key={sec.id} />)}
            </div>
        );
    }


}

export default Directory;