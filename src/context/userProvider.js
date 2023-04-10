import { useNavigate } from "react-router-dom";
import { UserContext } from "./context";
import axios from "axios";
import { useState } from "react";

const UserProvider = ({children})=>{

    const navigate = useNavigate();

    const [Nuser, setNUser] = useState(null)


    // REGISTER
    const register = async (cred)=>{
        // console.log(cred);
        try {
            
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`,cred);
            console.log(res);
            if(res.status === 200){
                alert("Registered Succesfully")
                navigate("/")
            }         

        } catch (err) {
            console.log(err);
            alert("Email already Registered")
        }

    }


    // LOGIN
    const login = async (cred)=>{
        // console.log(data);
        try {
            
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, cred);
            // console.log(res.data);
            const {token, user} = res.data
            if(res.status === 200){
                setNUser(user)
                localStorage.setItem("x-auth-token", token)
                navigate("/dashboard/inbox")
            }

        } catch (err) {
            console.log(err);
            alert("Check your Credentials and try again")
        }

    }


    return(
        <UserContext.Provider value={{register, login, Nuser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;
