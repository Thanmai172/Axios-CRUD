import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
