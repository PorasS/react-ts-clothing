import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import { Switch, Route, Link } from "react-router-dom";

const HatsPage = () => {
    return <div>
        <h1>HatsPage</h1>
    </div>
}




function App(): JSX.Element {

    return (
        <React.Fragment>

            <Switch>
                <Route path="/" component={HomePage}></Route>
                <Route path="/hats" component={HatsPage}></Route>
                {/* <HomePage /> */}
            </Switch>
        </React.Fragment>
    )
}

export default App;