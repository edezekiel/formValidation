import React, { useState } from "react";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert(`Submitting Bio ${(email, password)}`);
    } else {
      alert("invalid");
    }
  };

  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <label for="email">*Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label for="password">*Password:</label>
      <input
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <label for="age">Age (optional):</label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Form;
