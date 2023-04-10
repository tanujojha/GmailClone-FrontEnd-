import React, { useContext } from 'react';
import "./normalUserProfileImg.css";
import { UserContext } from '../../context/context';

function NormalUserProfileImg({logoutGUser}) {

    const context = useContext(UserContext);
    const {Nuser} = context
    // const {email} = Nuser
    // const firstLetter = email[0]

    // this logs out normal authenticated users
    const handleLogout = ()=>{
      console.log(("clicked logout"));
      const res = window.confirm("Do you want to Log Out")
      if(res){
        logoutGUser()
      }
    }

  return (
    <div className='NUPI' onClick={handleLogout}>
        {Nuser ? `${Nuser.email[0]}`: "😀" }
    </div>
  )
}

export default NormalUserProfileImg