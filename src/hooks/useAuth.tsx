import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthProvider";
// import AuthContext from "../context/AuthProvider";

export const useAuth = (): AuthContextType => {
    const contextValue = useContext(AuthContext);
    if (contextValue === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return contextValue;
};