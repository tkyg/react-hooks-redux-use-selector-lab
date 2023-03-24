import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
        <p>Total Users: {users.length}</p>
    </div>
  );
}

export default Users;
