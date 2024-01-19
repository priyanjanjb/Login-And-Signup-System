import { useState } from "react";
import { carelabelDataFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
//import DbConnect from "../config/DbConnect";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    setLoading(true);
    const data={
      strkNum: carelblState["Strock-Number"],
      contrctNum: carelblState["Contract-Number"],
      season: carelblState["Season"],
      tdept: carelblState["Tdept"],
    }

    console.log("data",data)
    try {
      const responce = await axios.post("http://localhost:5000/route",data)            
      
      console.log(responce);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("somthing went wrong");
    } finally {
      console.log("done");
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
          text={loading ? "Submitting..." : "Submit"}
        />
      </div>
    </form>
  );
}
