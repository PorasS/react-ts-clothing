import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import Header from './components/header/headerComponent';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUpComponent';
import { currentUser } from './interfaces/interface';
import { auth } from './firebase/firebase.util';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";


class App extends React.Component {

    state: currentUser = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });
            console.log("user: ", user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>


                <Header currentUser={this.state.currentUser} />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />

                </Switch>



            </div >
        );
    };
}

export default App;