import React from "react";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">User Cards</h1>
      <UserList />
    </div>
  );
};

export default App;
