import React, { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import AppBarDrawer from "../../components/appBarDrawer/appBarDrawer";
import InboxBoard from "../inboxBoard/inboxBoard";
import EmailBoard from "../emailBoard/emailBoard";
import { GUserContext } from "../../context/context";

function Dashboard() {

  
  return (
    <>
      <div className="dashboard">
        <AppBarDrawer />
        <InboxBoard />
        {/* <EmailBoard/> */}
      </div>
    </>
  );
}

export default Dashboard;
