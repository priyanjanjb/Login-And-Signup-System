import { useState } from 'react';
import { carelabelDataFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
//import { useNavigate } from 'react-router-dom';



const fields = carelabelDataFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));
//-------------------------------------------------CareLabel.js-------------------------------------------------
export default function CareLabel() {
  //const history = useNavigate();
  const [createLblState, setcreateLblState] = useState(fieldsState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setcreateLblState({ ...createLblState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  // Handle Signup API Integration here

 
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={createLblState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}

    

        {/* Pass loading state and display appropriate button text */}
        <FormAction handleSubmit={handleSubmit} text={loading ? 'Submitting...' : 'Submit'} />
      </div>
    </form>
  );
}
