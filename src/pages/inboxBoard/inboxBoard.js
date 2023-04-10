import React from "react";
import "./inboxBoard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ForumIcon from '@mui/icons-material/Forum';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import { Link } from "react-router-dom";
import EmailTab from "../../components/emailTab/EmailTab";


const checkBoxLabel = { inputProps: { "aria-label": "Checkbox demo" } };



function InboxBoard() {

  const open = false;

  return (
    <div style={open ? {marginLeft: "250px", width: "79%"} : {marginLeft: "100px", width: "90%"}} className="mainboard">
      <div className="topPane">
        <div className="topPaneLeft">
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
            {...checkBoxLabel}
            onChange={(e) => console.log(e.target)}
          />
          <RefreshIcon fontSize="small" />
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="topPaneRight">
          <ArrowBackIosIcon mx="5" fontSize="small" />
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
      <div className="navPane"> 
        <ul className="navPaneUl">
          <li><Link to="primary"><InboxIcon id="ic" /> Primary</Link></li>
          <li><Link to="/primary"><LocalOfferIcon color="primary"/> Promotion</Link></li>
          <li><Link to="/primary"><GroupIcon color="primary"/> Social</Link></li>
          <li><Link to="/primary"><SecurityUpdateIcon color="primary"/> Updates</Link></li>
          <li><Link to="/primary"><ForumIcon color="primary"/> Forum</Link></li>
        </ul>
      </div>
      <div className="emailTabCol">
        <EmailTab/>
        <EmailTab/>
        
      </div>
    </div>
  );

}

export default InboxBoard;
