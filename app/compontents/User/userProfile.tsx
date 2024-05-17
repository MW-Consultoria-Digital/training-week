import React from 'react';
import userMock from './userMock';


interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    website: string;
    company: Company;
    avatar: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export const UserProfile: React.FC = () => {
    const user: User = userMock;

    return (
        <div>
            <img src={user.avatar} alt={`${user.name}'s avatar`} />
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}, {user.city}, {user.state}, {user.zip}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <h2>Company</h2>
            <p>Name: {user.company.name}</p>
            <p>Catch Phrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
            <p>Status: {user.status}</p>
            <p>Created At: {new Date(user.created_at).toLocaleDateString()}</p>
            <p>Updated At: {new Date(user.updated_at).toLocaleDateString()}</p>
        </div>
    );
};
