export type UserInfoProps = { 
    name: string;
    email: string;
    age: number;
    contry?: string;
}

export interface Employee<T> {
    userInfo: T;
    companyName: string;
}