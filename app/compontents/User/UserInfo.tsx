'use client'

import { useCallback, useEffect, useMemo, useState } from "react";
import { UserInfoProps } from "./UserInterface";
import { UserErrorsEnum } from "./util";

const USER_ERROR = 'user_not_found' // esto lo esta regresando el BackEnd o el API 

export const UserInfo = ({name, lastName, age}: UserInfoProps) => {
  const [ages, setAges] = useState<number>(0) /// undefined
  const userExist = useMemo(() => {
    !UserErrorsEnum[USER_ERROR] ? true : false
  }, [USER_ERROR])

  const getFullName = useCallback(() => {
      return `${name} ${lastName}`
  }, [name, lastName])

  useEffect(() => {
    // Mounting commpontet 
    console.log('Mounting')
    return () => {
      console.log('Unmounting')
    }
  }, [age]) // updating component

  return (
    <div>{name}</div>
  )
}

