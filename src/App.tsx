import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import Header from './components/header/headerComponent';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUpComponent';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";



function App(): JSX.Element {

    return (
        <div>


            <Header />

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignUpPage} />

            </Switch>



        </div >
    );
}

export default App;