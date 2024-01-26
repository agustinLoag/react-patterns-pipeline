import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface Auth {
  password: string;
  user: string;
  roles: number[];
}

export interface AuthContextType {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({ password: '', user: '', roles: [] });

  const authContextValue: AuthContextType = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
