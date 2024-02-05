import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Users = () => {
  const [data, setData] = useState([]);
  const [mode,setMode] = useState('online')

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        console.warn(result);
        setData(result);
        localStorage.setItem('users', JSON.stringify(result));
      }).catch(error=>{
      let collection = localStorage.getItem('users');
      setMode('offline')
      if(collection){
        setData(JSON.parse(collection));
      }
      })
  }, []);
  return (
    <div>{
      mode === 'offline'? <div class="alert alert-warning" role="alert">
      You are in offline mode or Some connection problem occured
    </div>:
      null
      }
      <h1 className="danger ">Users</h1>

      <Table striped bordered hover className="p-3">
        <thead>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user,index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
