import React, { useState } from "react";
import "./emailTab.css";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

const EmailTab = () => {

  const navigat = useNavigate();

  const [isStarred, setIsStarred] = useState(false);

  const handleNavToMail = ()=>{
    navigat("hello")
  }

  return (
    <div className="emailtab">
      <div className="emailTabCSF">
        <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
        <StarIcon onClick={()=> setIsStarred(!isStarred)} sx={{ color: isStarred ? "orange" : "gray" }} id="starET" fontSize="small" />
        <p onClick={handleNavToMail} className="emailTabFrom">Tony Stark</p>
      </div>
      <div className="emailTabSUB" onClick={handleNavToMail}>
        <p>This is subject</p>
      </div>
      <div className="emailTabDT">
        <p>Mar 28</p>
      </div>
    </div>
  );
};

export default EmailTab