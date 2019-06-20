import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert(`Submitting Name ${name}`);
    } else {
      alert("invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label for="firstName">
        First Name:
        <input
          type="text"
          id="firstName"
          name="txtFName"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
