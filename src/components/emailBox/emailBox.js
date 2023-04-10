import React from 'react';
import "./emailBox.css";
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

function EmailBox() {
  return (
    <>
        <div className='subjicondiv'>
            <div className='subdiv'>
                <h4>Gmail Clone Test</h4>
            </div>
            <div className='2icons'>
                <LocalPrintshopOutlinedIcon/>
                <OpenInNewOutlinedIcon/>
            </div>
        </div>
        <div className='maincontdiv'>
            <div className='usericondiv'>
                <img className='usericon' src="/usericon.png" alt="user"/>
            </div>
            <div className='contdiv'>
                <div className='namedateicondiv'>
                    <div className='namediv'>
                        <p >Tony Stark</p>
                    </div>
                    <div className='icondtediv'>
                        <div className='datediv'>
                            <p className='dateeb'>Apr 5, 2023, 11:10PM</p>
                        </div>
                        <div className='icondiveb'>
                            <StarBorderOutlinedIcon fontSize='small'/>
                            <ReplyOutlinedIcon fontSize='small'/>
                            <MoreVertIcon fontSize='small'/>
                        </div>
                    </div>
                </div>
                <p className='tome'>to me 🔽</p>
                <div className='msgpartdiv'>
                    <p>This is the body of the email</p>
                    <p>thanks</p>
                    <p>warm regards</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmailBox