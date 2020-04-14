import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import Logo from '../../assets/lion.svg';
import { connect } from 'react-redux';
import './headerStyles.scss';
import CartIcon from '../cartIcon/cartIconComponent';
import CartDropDown from '../cartDropDown/cartDropDownComponent';
// import '../../App.css';


class Header extends React.Component<any> {

    render() {

        console.log("header: ", this.props)
        return (
            <div className='header'>
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className="option" to='/shop'>
                        SHOP
                </Link>
                    <Link className="option" to='/contact'>
                        CONTACT
                </Link>
                    {
                        this.props.currentUser ?
                            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link className="option" to='/signin'>
                                SIGN IN
                            </Link>
                    }
                    <CartIcon />
                </div>
                {
                    this.props.hidden ? null : <CartDropDown />
                }
            </div>
        );
    }
}



// the state which we passed to a mapStateToProps() is actually rootReducer
const mapStateToProps = (state: any): any => {

    return {
        currentUser: state.user.currentUser,
        hidden: state.cartIcon.hidden
    }
}

//passing null as default
export default connect(mapStateToProps)(Header);