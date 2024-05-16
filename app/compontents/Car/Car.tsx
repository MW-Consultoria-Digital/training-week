import React from 'react'
import { CarInfo } from './Carinfo'


const ArraySample = [ 
    {
        name: 'Supra',
        model: 'Toyota',
    }, 
    {
        name: 'Camaro',
        model: 'Chevrolet',
    },
    {
        name: 'Eclipce',
        model: 'Mitsubishi',
    }
]

export const Car = () => {
  return (
    <>
        {ArraySample.map((user, index) => (
            <CarInfo key={`${user.name}-${index}`} name={user.name} model={user.model} age={32} />
        ))} 
    </>
  )
}
