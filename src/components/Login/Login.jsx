import { useState } from 'react';
import { loginFields } from "./formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const navigate = useNavigate();

    const [loginState,setLoginState]=useState(fieldsState);
    const [error, setError] = useState(''); // Declare the error state
    console.log(loginState);
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

        const sampleUser = {
            email: 'user@example.com',
            password: 'password'
        };

       if (loginState['email-address'] === sampleUser['email'] && loginState.password === sampleUser.password) {
            navigate('/home'); // Redirect to the landing page
        } else {
            setError('Username or password is incorrect'); // Set error message
        }
    };

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
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

                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
        {error && <p className="error">{error}</p>} {/* Display error message */}
      </form>
    )
}
