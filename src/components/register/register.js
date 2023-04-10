import {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./register.css";
import { useFormik } from 'formik';
import { UserContext } from '../../context/context';


function Register(){

  const userContext = useContext(UserContext);
  const {register} = userContext;

  const [showbtn, setShowbtn] = useState(false);          // state to show/hide show btn in password field
  const [showClicked, setShowClicked] = useState(false)   // state to show/hide password
  
  // Formik handeling
  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      confirm: ""
    },
    onSubmit: (values)=>{
      if(values.password === values.confirm){
        // console.log(values);
        register(values)

      }else{
        alert("Password does not match")
      }
    }

  })



  // function to show/hide password
  const handelShow = ()=>{
    setShowClicked(!showClicked)
  }

  // show btn when password length > 0
  useEffect(()=>{
    if(formik.values.password.length > 0){
      setShowbtn(true)
    }else{
      setShowbtn(false)
    }
  },[formik.values.password])



  return(

        <div className="register">
            <form id = "regiform" onSubmit = {formik.handleSubmit}>
              <h1 className="h3 mb-3 fw-bold">Create Account</h1>

              <div className="form-floating">
                <input value={formik.values.name} onChange = {formik.handleChange}  name="name" type="text" className="form-control" id="floatingInput" required autoComplete="off"/>
                <label htmlFor="floatingInput">Name</label>
              </div>

              <div className="form-floating">
                <input value={formik.values.email} onChange = {formik.handleChange}  name="email" type="email" className="form-control" id="floatingInput" required autoComplete="off"/>
                <label htmlFor="floatingInput">Email</label>
              </div>

              <div className="form-floating mt-1">
                <input value={formik.values.password} onChange = {formik.handleChange} name="password" type={showClicked ? "text" : "password"} className="form-control" id="floatingPassword" minLength="2" required autoComplete="off" />
                {/* <button onClick={handelShow} style={showbtn ? {display: "block"} : {display: "none"}} className="showbtn" type="button" name="button">show</button> */}
                <label htmlFor="floatingPassword">Password</label>
              </div>
              
              <div className="form-floating mt-1">
                <input value={formik.values.confirm} onChange = {formik.handleChange} name="confirm" type={showClicked ? "text" : "password"} className="form-control" id="floatingPassword" minLength="2" required autoComplete="off" />
                {/* <button onClick={handelShow} style={showbtn ? {display: "block"} : {display: "none"}} className="showbtn" type="button" name="button">show</button> */}
                <label htmlFor="floatingPassword">Confirm</label>
              </div>

              <button onClick={handelShow} style={showbtn ? {display: "block"} : {display: "none"}} className="btn btn-sm btn-secondary mt-2" type="button" name="button">Show Password</button>

              
              <div className = "signinbtn d-flex justify-content-center">
                <button value = "signinbtn" name="signinbtn" className="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>
              </div>
            </form>

              <div className="mt-3 mb-3 d-flex justify-content-center">
                  <Link className="gotologin" to="/">Go to Login</Link>
              </div>
          </div>

  )
}

export default Register;
