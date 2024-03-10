import React from "react";
import UserItem from "./UserItem";
function UserList(props) {
  return (
    <div>
      <ul>
        {props.users.map((user) => {
          return (
            <UserItem name={user.name} age={user.age} address={user.address} height={user.height} />
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
