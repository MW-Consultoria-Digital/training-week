'use client'

import { useEffect, useMemo, useState } from "react";
import { CarInfoProps } from "./Carinterface";
import { carErrorsEnum } from "./utils";

const USER_ERROR = 'car_not_found' 

export const CarInfo = ({name, model, age}: CarInfoProps) => {
  const [ages, setAges] = useState<number>(0)  
  const userExist = useMemo(() => {
    return !carErrorsEnum[USER_ERROR];
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
    <div>{name} {model}</div>
    </>
  )
}

