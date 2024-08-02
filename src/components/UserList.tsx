import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
