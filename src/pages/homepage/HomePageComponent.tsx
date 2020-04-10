import React from 'react';
import '../../HomePageStyles.scss';
import Directory from '../../components/directory/directoryComponents';


const HomePage = () => {
    // console.log("props in HomePage", props)
    return (
        <div className="homepage">
            <Directory />
        </div>

    );
}

export default HomePage;