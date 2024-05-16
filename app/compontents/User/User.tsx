import React from 'react'
import { UserInfo } from './UserInfo'
import userMock from './UserMock'


const ArraySample = [ 
    {
        name: 'Edgar',
        email: 'Maldonado',
    }
    
]

export const User = () => {
   
  return (
    <>
        {ArraySample.map((user, index) => (
            <UserInfo key={`${user.name}-${index}`} name={userMock.name} email={userMock.email} age={userMock.age} />
        ))} 
    </>
  )
}
