import React from "react";

function UserItem(props) {
  return (
    <div key={props.name}>
      <li>
        <h3>
          {props.name} , age = {props.age} , height={props.height}
        </h3>
        <h3> address = {props.address}</h3>
      </li>
    </div>
  );
}

export default UserItem;
