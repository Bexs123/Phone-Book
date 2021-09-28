import { useState } from "react";

import "./App.css";
import { Form } from "./components/Forms";

const App = () => {
  const [userForm, setUserForm] = useState([]);

  const handleForm = (data) => {
    setUserForm([...userForm, data]);
  };

  return (
    <div className="wrapper">
      <Form handleForm={handleForm} />
      {userForm.map((item, index) => (
        <Person key={index} mobile={item.mobile} />
      ))}
    </div>
  );
};

const Person = (props) => {
  return <h1>Mobile Number {props.mobile}</h1>;

};

export default App;