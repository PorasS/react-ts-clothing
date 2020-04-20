import React from 'react';
import HomePage from './pages/homepage/HomePageComponent';
import ShopPage from './pages/Shop/ShopComponent';
import CheckOutPage from './pages/checkout/checkOutComponent';
import Header from './components/header/headerComponent';
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUpComponent';

import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.util';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { selectCollectionForPreview } from './redux/shopRedux/shopDataSelector';



class App extends React.Component<any> {

    // state: UserData = {
    //     currentUser: null
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {
        console.log("connect: ", this.props)

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {
                console.log("1st call: ", userAuth)
                const userRef = await createUserProfileDocument(userAuth, userAuth.displayName);

                // userRef object is having a method which returns a snapshot
                // Document snapshot object, we get it from documentReference object
                // Document snapshot object allows us to check if the document exists, using ,exist property, returns boolean
                //use can also use a .data() which returns a JSON object of the document
                //onSnapshot() methods gets called everytime, snapshot object gets updated.
                userRef.onSnapshot(snapShot => {
                    // console.log("snapshopApp: ", snapShot.data());
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });

                    console.log("cdidMstate: ", this.props)
                })
            }

            this.props.setCurrentUser(userAuth);

            // console.log("user: ", user);
            // console.log("App props: ", this.props);
            // addCollectionsAndDocuments("collections", this.props.collectionsArray.map(({ title, items }) => ({ title, items })));

        })


    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>

                <Header />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/signin" render={() => {
                        return (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />);
                    }} />
                    <Route path="/checkout" component={CheckOutPage} />

                </Switch>
            </div >
        );
    };
}

//we pass a rootReducer to mapStateToProps, which is a object having user, lets destructure
//the rootreducer object, and pass it to mapStateToProps
const mapStateToProps = (state: any) => {
    return {
        // currentUser: selectCurrentUser(state)
        currentUser: state.user.currentUser,
        // collectionsArray: selectCollectionForPreview(state)
    }
}

// dispatch is used to dispatch the action
const mapDispatchToProps = (dispatch: any) => {
    return {
        setCurrentUser: (user: any) => { dispatch(setCurrentUser(user)) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);