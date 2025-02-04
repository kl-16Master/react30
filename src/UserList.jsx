import React, { useLayoutEffect } from 'react'

const UserList = () => {
  
  const users= [
    {
        id: 1, name:"Alice", age:25
    },
    {
        id: 2, name:"Arjun", age:27
    },
    {id: 3, name:"Jhon", age:29
    },
  ];
    return (
    <div>
     {users.map((user)=>(
        <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </div>
     ))}

    </div>)
  
}

export default UserList