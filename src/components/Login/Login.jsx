import { useState } from 'react';
import { loginFields } from "./formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  }

  const authenticateUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: loginState['email'], // Make sure the field name matches the server-side expectations
        password: loginState.password,
      });
  
      console.log(response.data);
  
      if (response.data.success) {
        navigate('/home'); // Redirect to the landing page
      } else {
        setError('Username or password is incorrect');
      }
    } catch (error) {
      console.error("Error authenticating user:", error.message);
      setError('Error authenticating user');
    }
  };
  

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map(field =>
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        )}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
      {error && <p className="error">{error}</p>}
    </form>
  )
}
