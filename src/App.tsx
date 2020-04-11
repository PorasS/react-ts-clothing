import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/header/headerComponent';





function App(): JSX.Element {

    return (
        <div>


            <Header />

            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                {/* <HomePage /> */}
            </Switch>
            {/* <ShopPage /> */}


        </div>
    );
}

export default App;