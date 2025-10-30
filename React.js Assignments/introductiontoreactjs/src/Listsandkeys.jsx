import React from 'react'

const Listsandkeys = () => {
  let fruits = ["Apple", "Banana", "Orange"]

  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "rockey" },
    { id: 3, name: "ajay" },
  ]

  return (
    <div>
      <h2>Fruit Names: </h2>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={index}>{fruit}</li>
          )
        })}
      </ul>

      <br />
      <hr />
      <br />

      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ol>

    </div>
  )
};

export default Listsandkeys;
