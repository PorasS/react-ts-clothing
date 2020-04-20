import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import Logo from '../../assets/lion.svg';
import { connect } from 'react-redux';
import CartIcon from '../cartIcon/cartIconComponent';
import CartDropDown from '../cartDropDown/cartDropDownComponent';
import { selectCartHidden } from '../../redux/cart/cartSelector';

import {
    HeaderComponent,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './headerStyles';

// import '../../App.css';


class Header extends React.Component<any> {

    render() {

        console.log("header: ", this.props)
        return (
            <HeaderComponent>
                <LogoContainer to='/'>
                    <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to='/shop'>
                        SHOP
                    </OptionLink>
                    <OptionLink to='/contact'>
                        CONTACT
                    </OptionLink>
                    {
                        this.props.currentUser ?
                            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                            :
                            <OptionLink to='/signin'>
                                SIGN IN
                            </OptionLink>
                    }
                    <CartIcon />
                </OptionsContainer>
                {
                    this.props.hidden ? null : <CartDropDown />
                }
            </HeaderComponent>
        );
    }
}



// the state which we passed to a mapStateToProps() is actually rootReducer
const mapStateToProps = (state: any): any => {

    return {
        // currentUser: selectCurrentUser(state),
        currentUser: state.user.currentUser,
        hidden: selectCartHidden(state)
    }
}

//passing null as default
export default connect(mapStateToProps)(Header);