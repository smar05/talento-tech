// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Todo App</h1>
      <Link to="/tasks" className="btn btn-primary mt-3">
        Go to Tasks
      </Link>
    </div>
  );
};

export default Home;
