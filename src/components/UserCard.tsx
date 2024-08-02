import React from "react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={user.avatar} className="card-img-top" alt={user.first_name} />
      <div className="card-body">
        <h5 className="card-title">
          {user.first_name} {user.last_name}
        </h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
