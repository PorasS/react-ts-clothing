import React from 'react';
import './signInAndSignUpStyles.scss';
import SignIn from '../../components/signIn/signInComponent';
import SignUp from '../../components/signUp/signUpComponent';
import './signInAndSignUpStyles.scss';

const SignInANdSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInANdSignUpPage;