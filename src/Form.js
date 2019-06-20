import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert(`Submitting Bio ${firstName, lastName, age}`);
    } else {
      alert("invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        First Name:
        <input
          type="text"
          id="firstName"
          name="txtFName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          id="lastName"
          name="txtLName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
         Age:
        <input
          type="text"
          id="firstName"
          name="intAge"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
