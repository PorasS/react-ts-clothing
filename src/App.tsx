import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import Header from './components/header/headerComponent';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUpComponent';
import { UserData } from './interfaces/interface';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";


class App extends React.Component {

    state: UserData = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {
                console.log("1st call: ", userAuth)
                const userRef = await createUserProfileDocument(userAuth, userAuth.displayName);

                // userRef object is having a method which returns a snapshot
                // Document snapshot object, we get it from documentReference object
                // Document snapshot object allows us to check if the document exists, using ,exist property, returns boolean
                //use can also use a .data() which returns a JSON object of the document
                userRef.onSnapshot(snapShot => {
                    // console.log("snapshopApp: ", snapShot.data());
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                    console.log("cdidMstate: ", this.state)
                })
            }

            this.setState({
                currentUser: userAuth
            });

            // console.log("user: ", user);
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