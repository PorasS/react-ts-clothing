import React from 'react';
import FormInput from '../../components/formInput/formInputComponent';
import CustomButtom from '../customButton/customButtonComponent';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import { SignUpData } from '../../interfaces/interface';
import './signUpStyles.scss';

class SignUp extends React.Component {

    state: SignUpData = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert("password don't match:");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log("call to createUserWithEmailAndPassword ");
            console.log("signUpUser: ", user);
            console.log("signUpUser,displayName: ", displayName);

            console.log("call 2nd to createUserProfileDocuments: ", user, displayName);
            await createUserProfileDocument(user, { displayName });


            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error("error", error);
        }

        console.log("SignUp: ", this.state)

    }

    handleChange = (event: any) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account:</h2>
                <span>sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                    />
                    {/* children, type, value, onClick, isGoogleSignIn  */}
                    <CustomButtom type='submit' value='' onClick={() => { }} isGoogleSignIn='false' inverted=''>Sign Up</CustomButtom>
                </form>
            </div >
        );
    }

}

export default SignUp;

