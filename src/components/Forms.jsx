import { useState } from "react";

export const Form = ({ handleForm }) => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({
      fname,
      sname,
      mobile,
    });

    setFname("")
    setSname("")
    setMobile("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={fname} func={setFname} label="First name" name="fname" />
      <Input value={sname} func={setSname} label="Last name" name="sname" />
      <Input value={mobile} func={setMobile} label="Mobile" name="mobile" />

      <button type="submit">Submit</button>
    </form>
  );
};

const Input = ({ value, func, name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        name={name}
        type="text"
        onChange={(e) => func(e.target.value)}
        value={value}
      />
    </>
  );
};