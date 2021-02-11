import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/Firebase';

import './SignIn.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          label='email'
          required
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          required
          label='password'
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
