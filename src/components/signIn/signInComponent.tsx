import React from 'react';
import FormInput from '../formInput/formInputComponent';
import CustomButton from '../customButton/customButtonComponent';
import { signInWithGoogle } from '../../firebase/firebase.util';
import './signInStyles.scss';
import { signIn } from '../../interfaces/interface';




class SignIn extends React.Component {

    state: signIn = {
        email: '',
        password: ''
    }


    handleSubmit = (event: any) => {

        event.preventDefault();

        this.setState(
            {
                email: '',
                password: ''
            }
        );
    }

    handleChange = (event: any) => {
        const { value, name } = event.target;

        // name would be email or password based on call
        this.setState(
            {
                [name]: value
            }
        );

        // console.log(this.state.email);
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form' onClick={() => { }} isGoogleSignIn='false'>Sign In</CustomButton>
                        <CustomButton type='' value='' onClick={signInWithGoogle} isGoogleSignIn='true'>Google Sign In</CustomButton>
                    </div>

                </form>
            </div>
        );
    }

}

export default SignIn;