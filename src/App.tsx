import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";




function App(): JSX.Element {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Link to="/shop">shopPage</Link>
                </div>


                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/shop">
                        <ShopPage />
                    </Route>
                    {/* <HomePage /> */}
                </Switch>
                {/* <ShopPage /> */}
            </BrowserRouter>

        </div>
    );
}

export default App;