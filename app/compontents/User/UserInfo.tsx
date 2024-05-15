import { UserInfoProps } from "./UserInterface";
import { UserErrorsEnum } from "./util";

const USER_ERROR = 'user_not_found' // esto lo esta regresando el BackEnd o el API 

export const UserInfo = ({name, lastName, age}: UserInfoProps) => {
    const userExist = !UserErrorsEnum[USER_ERROR] ? true : false	
  return (
    <div>{name}</div>
  )
}
