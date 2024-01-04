import { useState } from "react";
import { carelabelDataFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
//import DbConnect from "../config/DbConnect";
//import { useNavigate } from "react-router-dom";
const fields = carelabelDataFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));
//-------------------------------------------------CareLAbel.js-------------------------------------------------
export default function CareLabel() {
  //const history = useNavigate();
  const [carelblState, setCarelblState] = useState(fieldsState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setCarelblState({ ...carelblState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const strkNum = carelblState["Strock-Number"];
      const cntrkNum = carelblState["Contract-Number"];
      const season = carelblState["Season"];
      const tdeptNum = carelblState["Tdept"];

      console.log(strkNum, cntrkNum, season, tdeptNum);
      // Your asynchronous code goes here
      // For example, an API call or any other async operation
      // await someAsyncOperation();

      // If you have more code to execute after the async operation, you can include it here
    } catch (error) {
      // Handle the error appropriately
      setError("care data not submitted");
      console.error("Error occurred:", error);

      // You might want to set an error state or display an error message to the user
      // setErrorState(true);
    } finally {
      // This block will be executed whether there is an error or not
      setLoading(false);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={carelblState[field.id]}
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
        <FormAction
          handleSubmit={handleSubmit}
          text={loading ? "Signing up..." : "Signup"}
        />
      </div>
    </form>
  );
}
