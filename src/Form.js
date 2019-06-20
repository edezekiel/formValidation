import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert(`Submitting Bio ${(firstName, lastName, age)}`);
    } else {
      alert("invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label for="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        id="firstName"
        name="txtFName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />
      <label for="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="txtLName"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        required
      />
      <label for="age">Age:</label>
      <input
        type="text"
        id="age"
        name="intAge"
        value={age}
        onChange={e => setAge(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
