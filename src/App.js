import "./styles.css";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Users from "./components/Users";
import api from "./components/usersApi";
export default function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    api
      .get("https://dummyapi.io/data/api/user")
      .then((res) => {
        console.log(typeof res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Search />
      <Users users={users} />
    </div>
  );
}
