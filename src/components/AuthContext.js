import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
        const[username, setUsername] = useState("");
        const[password, setPassword] = useState("");
        const[user, setUser] = useState(null);
        const[error, setError] = useState("");

        const handleLogin = () =>{
            if(!username || !password){
                setError("Username or Password required!")
            }
            else{
                setUser(username);
            }
            
        }
        const isAuthenticate = () =>{
            if(!user){
                return true;
            }
            else return false;
        }
    
    return(
        <AuthContext.Provider value ={{ username,setUsername,password,setPassword, user, setUser, error, setError, handleLogin, isAuthenticate}}>
                {props.children}
        </AuthContext.Provider>
    )
}
