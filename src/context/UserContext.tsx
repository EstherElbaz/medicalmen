
import React, { createContext, useState, ReactNode, FC } from 'react';

interface User {
    id: number;
    emailAddress: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    genderId: number;
    identityNumber: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

