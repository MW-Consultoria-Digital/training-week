import React, { useEffect } from "react";
import { UserInfo } from "./UserInfo";
import { UserProfile } from "./userProfile";
import { API } from "@/app/services/API";

const ArraySample = [
  {
    name: "Edgar",
    lastName: "Maldonado",
  },
  {
    name: "Juan",
    lastName: "Perez",
  },
  {
    name: "Maria",
    lastName: "Gonzalez",
  },
];

export const User = () => {
  return (
    <>
      {ArraySample.map((user, index) => (
        <UserInfo
          key={`${user.name}-${index}`}
          name={user.name}
          lastName={user.lastName}
          age={32}
        />
      ))}
      <UserProfile />
    </>
  );
};
