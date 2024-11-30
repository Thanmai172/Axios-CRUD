import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { getUsers, addUser, updateUser, deleteUser } from "./services/api";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]); // Store the list of users
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users from the API
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add a new user
  const handleAddUser = async (newUser) => {
    try {
      const response = await addUser(newUser); // Call API to add user
      setUsers([...users, response.data]); // Add the new user to the state
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Update an existing user
  const handleUpdateUser = async (id, updatedUser) => {
    try {
      await updateUser(id, updatedUser); // Call API to update user
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        ) // Update the state with the edited user
      );
      setEditingUser(null); // Reset editing state
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id); // Call API to delete user
      setUsers(users.filter((user) => user.id !== id)); // Remove the user from the state
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="app">
      <h1>React Axios CRUD App</h1>
      {/* Add or Edit User Form */}
      {editingUser ? (
        <EditUser
          user={editingUser}
          onUpdate={handleUpdateUser}
          onCancel={() => setEditingUser(null)} // Cancel editing
        />
      ) : (
        <AddUser onAdd={handleAddUser} />
      )}
      {/* User List */}
      <UserList
        users={users}
        onEdit={(user) => setEditingUser(user)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
