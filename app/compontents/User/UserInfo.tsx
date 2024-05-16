'use client'

import { useEffect, useMemo, useState } from "react";
import { UserInfoProps } from "./UserInterface";
import { UserErrorsEnum } from "./util";

const USER_ERROR = 'user_not_found' // esto lo esta regresando el BackEnd o el API 

export const UserInfo = ({name, email, age}: UserInfoProps) => {
  const [ages, setAges] = useState<number>(0) /// undefined
  const userExist = useMemo(() => {
    return !UserErrorsEnum[USER_ERROR];
  }, []);



  useEffect(() => {
    // Mounting commpontet 
    console.log('Mounting')
    return () => {
      console.log('Unmounting')
    }
  }, [age]) // updating component

  return (
    <>
    <div>Nombre: {name}  Correo: {email}  Edad: {age} </div>
    
    </>
  )
}

