import React from 'react';
import './menu-itemStyles.scss';

import { withRouter } from 'react-router-dom';

const MenuItem = (props: any) => {

    console.log("withRouter: ", props)
    console.log("reach to menuitem ")
    const { prop } = props;

    const { id, title, imageUrl, size } = prop;

    return (
        <div className={`menu-item ${size}`} onClick={() => props.history.push(`${props.match.url}${props.prop.linkUrl}`)}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <div className="title">
                    <h1>{title}</h1>
                    {/* <span className="subtitle">Shop Now</span> */}
                </div>
            </div>
        </div>
    );

}
//withRouter is a HOC component and providing Router related props to MenuItem component
export default withRouter(MenuItem);