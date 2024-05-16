export type CarInfoProps = { 
    name: string;
    model: string;
    age: number;
    contry?: string;
}

export interface Employee<T> {
    carInfo: T;
    fabricName: string;
}