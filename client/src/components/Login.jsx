import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));
//-------------------------------------------------Login.js-------------------------------------------------
export default function Login() {
  const history = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const responce = await axios.get("http://localhost:5000/Login");
    } catch (error) {
      console.log("not connected to server");
    }

    try {
      // Use async/await for better error handling and to wait for the login to complete
      await loginWithEmailAndPassword(
        auth,
        loginState["email-address"],
        loginState["password"]
      );
      console.log("Login Successful");
      // Additional logic after successful login (e.g., redirect)
      history("/careLabel");
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmailAndPassword = async (auth, email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    // You can return the user or any other data if needed
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
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
        ))}
      </div>

      <FormExtra />

      {/* Display error message if there's an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Pass loading state and display appropriate button text */}
      <FormAction
        handleSubmit={handleSubmit}
        text={loading ? "Logging in..." : "Login"}
      />
    </form>
  );
}
