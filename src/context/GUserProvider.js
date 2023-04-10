import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GUserContext } from "./context";
import axios from "axios";

const GUserProvider = ({children})=>{

    const navigate = useNavigate();

    const [Guser, setGUser] = useState(null);
    const [userFrmDB, setuserFrmDB] = useState({})

    // GET AUTHENTICATED GOOGLE USER 
    const getGUser = async ()=>{
        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/Glogin/success`, {withCredentials: true});
          setGUser(res.data.user)
          setuserFrmDB(res.data.userFrmDB)
        } catch (error) {
            console.log(error);
        }
    }

    // SEND EMAIL
    const sendEmail = async(message)=>{
        
        const newMessage = {...message, fromID: Guser.id}

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/email/postemail`, newMessage, {withCredentials: true})
            if(res.status === 200){
                alert(res.data.message)
            }else{
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }


    // LOGOUT GOOGLE OR/AND NORMAL USER
    const logoutGUser = async ()=>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/Glogout`, {withCredentials: true});
            // console.log(res);
            if(res.status === 200){
                setGUser(null); // upon succes logout setting GUser to null
                localStorage.clear()    // upon succes logout clearing local storage which has jwt of normal user
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    return(
        <GUserContext.Provider value={{Guser, userFrmDB, getGUser, sendEmail, logoutGUser}}>
            {children}
        </GUserContext.Provider>
    )
}


export default GUserProvider;
