import React, {useContext} from "react";
import Modal from "react-modal";
import "./compose.css";
import { Button} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useFormik} from 'formik'
import { GUserContext } from "../../context/context";


Modal.setAppElement("#root");

const Compose = ({open})=> {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const gcontext = useContext(GUserContext);
  const {sendEmail} = gcontext
  
  const formik = useFormik({
    initialValues: {
      to: "",
      subject: "",
      message: ""
    },
    onSubmit: (values, {resetForm})=>{
      // console.log(values);
      sendEmail(values);
      resetForm();
    }
  })

  
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const newStyle = {
    overlay: {
      position: 'fixed',
      top: "20%",
      left: "55%",
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '5px',
      left: '40px',
      right: '40px',
      bottom: '10px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '20px',
      outline: 'none',
      padding: '10px'
    }
  }

  return (
    <div className="composemain">
        <div className="composebtndiv" onClick={openModal}>
            <CreateIcon >Compose</CreateIcon>
            <h5 style={{display: open ? "inline-block" : "none"}}>Compose</h5>
            
        </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={newStyle}
        // contentLabel="Example Modal"
      >
        <div className="topdivmsgbox">
            <p className="newmsg">New Message</p>
            <CloseOutlinedIcon className="closemsgbox" onClick={closeModal}/>
            
        </div>
        <form onSubmit={formik.handleSubmit}>
            <div className="input-group input-group-sm mb-3 todiv">
                <span className="input-group-text" id="inputGroup-sizing-sm">To</span>
                <input value={formik.values.to} onChange={formik.handleChange} name="to" type="text" className="form-control toinp" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div className="input-group input-group-sm mb-3 subjdiv">
                <span className="input-group-text" id="inputGroup-sizing-sm">Subject</span>
                <input value={formik.values.subject} onChange={formik.handleChange} name="subject" type="text" className="form-control subjectinp" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div className="form-floating msgdiv">
                <textarea value={formik.values.message} onChange={formik.handleChange} name="message" className="form-control msg" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "245px"}}></textarea>
            </div>

            <div className="botmmsgndiv mt-4">
                <Button type="submit" id="sendmsgbtn" size="small" variant="contained">Send</Button>
                <div className="actionicons">
                    <AttachFileIcon/>
                    <AddToDriveIcon/>
                    <AddLinkIcon/>
                    <MoreVertIcon/>
                </div>
                <DeleteOutlineOutlinedIcon className="delmsgicon"/>
            </div>    
          
        </form>
      </Modal>
    </div>
  );
}

export default Compose;
