import { useState } from 'react';
import { signupFields } from "./formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  }

  // Handle Signup API Integration here
  const createAccount = async () => {
    try {
      // Make an API call to your Express server
      const response = await axios.post('http://localhost:3001/createAccount', signupState);
      console.log(response.data); // Assuming the server responds with some information

      // Reset the form after successful submission
      setSignupState(fieldsState);
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map(field =>
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
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}
