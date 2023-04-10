import React from 'react';
import "./emailBoard.css";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SnoozeIcon from '@mui/icons-material/Snooze';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Button from '@mui/material/Button';
import EmailBox from '../../components/emailBox/emailBox';

function EmailBoard() {

    const navigate = useNavigate()

    const handlebackbtn = ()=>{
        navigate(-1)
    }

  return (
    <div className='emailBoard'>
        <div className="topPaneEB">
            <div className="topPaneLeftEB">
                <ArrowBackIcon onClick={handlebackbtn}/>
                <ArchiveOutlinedIcon/>
                <ReportGmailerrorredOutlinedIcon/>
                <DeleteOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <SnoozeIcon/>
                <AddTaskIcon/>
                <DriveFileMoveOutlinedIcon/>
                <LabelOutlinedIcon/>
                <MoreVertIcon/>
            </div>
            <div className="topPaneRightEB">
                <ArrowBackIosIcon mx="5" fontSize="small" />
                <ArrowForwardIosIcon fontSize="small" />
            </div>
        </div>
        <div className='emailBoxEB'>
            <EmailBox/>
        </div>
        <div className='replydBtnsdiv'>
            <Button id='replyBtn' variant='outlined'>Reply</Button>
            <Button id='fwdBtn' variant='outlined'>Forward</Button>
        </div>
    </div>
  )
}

export default EmailBoard