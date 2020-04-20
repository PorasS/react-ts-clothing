import React from 'react';
import '../../HomePageStyles.scss';
import { HomePageContainer } from './homepageStyles';
import Directory from '../../components/directory/directoryComponents';


const HomePage = () => {
    // console.log("props in HomePage", props)
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}

export default HomePage;