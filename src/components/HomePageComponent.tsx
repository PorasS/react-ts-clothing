import React from 'react';
import '../HomePageStyles.scss';


const HomePage = () => {

    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <div className="title">
                            <h1>Hats</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">
                            <h1>Jackets</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">
                            <h1>Sneakers</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">
                            <h1>Mens</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">
                            <h1>Womens</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;