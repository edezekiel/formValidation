import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        First Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
