import React, { useState } from "react";

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    const newUser = { name, email };
    onAdd(newUser); // Call the parent component's function
    setName("");
    setEmail("");
  };

  return (
    <form className="add-user" onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
    