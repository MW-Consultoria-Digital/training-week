'use client'

import { useEffect } from "react";
import { UserErrorsEnum } from "./util";

// type de userinterface para no hacer scope global desde el archivo
type UserInfoProps = { 
  name: string;
  lastName: string;
  age: number;
  contry?: string;
};

const USER_ERROR = 'user_not_found'; // esto lo está regresando el BackEnd o el API 

export const UserInfo = ({ name, lastName }: UserInfoProps) => {
  const userExist = !UserErrorsEnum[USER_ERROR];

  useEffect(() => {
    // Mounting component
    console.log('Mounting');
    return () => {
      console.log('Unmounting');
    };
  }, []); 

  return (
    <div>{name}</div>
  );
};
