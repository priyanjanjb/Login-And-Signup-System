import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';



const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));
//-------------------------------------------------Signup.js-------------------------------------------------
export default function Signup() {
  const history = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirmation match
    if (signupState.password !== signupState['confirm-password']) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // Create the user account
      await createAccount(auth,signupState['email-address'], signupState['password']);
      console.log('Signup Successful');
      // Additional logic after successful signup (e.g., redirect)
      history('/')//naviget to the home page
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
    
  };

  // Handle Signup API Integration here
  const createAccount = async (auth,email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    // You can return the user or any other data if needed
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}

        

        {/* Display error message if there's an error */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Pass loading state and display appropriate button text */}
        <FormAction handleSubmit={handleSubmit} text={loading ? 'Signing up...' : 'Signup'} />
      </div>
    </form>
  );
}
