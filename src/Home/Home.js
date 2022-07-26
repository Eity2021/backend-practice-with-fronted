import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleForm = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    //post method

    fetch("http://localhost:7000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Success");
      })
      .catch((error) => {
       alert("Error:", error);
      });
  };

  const deleteHandle = (id) => {
    const proceed = window.confirm("are you sure");
    if (proceed) {
      console.log("delete ID ", id);
      const url = `http://localhost:7000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="App">
        <h1>data :{users.length}</h1>

        <form onSubmit={handleForm}>
          <div>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div>
            <input type="submit" value="submit" placeholder="email" />
          </div>
        </form>
        <div>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} :: {user.email}{" "}
              <button onClick={() => deleteHandle(user._id)}>X</button>
              <Link to={`updateForm/${user._id}`}>update</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
