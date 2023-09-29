import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const baseUrl = "http://localhost:8080/";

  const fetchUserData = () => {
    axios.get(baseUrl + "api/v1/data").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(users);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.endYear}>{user.sector}</li>
          ))}
          <li>{user.intensity}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
