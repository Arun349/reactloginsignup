import React, { Component } from 'react'
import { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Cookies from 'js-cookie';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Login = () => {

 
  const navigate = useNavigate();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const msgref = useRef();
  const errmsg = useRef();
  const errmsg2 = useRef();
  const length=useRef();
  const [txtclr,setTextclr]=useState()
  const[focuspsd,setFocuspsd]=useState()
  

  const handleSignupForm = async event => {
    event.preventDefault();
    console.log(Password.length)
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {

      email: Email,
      password: Password

    }



    let URL = "http://localhost:5173/api/Signup/api/Signin";
    await axios.post(URL, param, {
      headers: headers
    }).then((response) => {
      if (response.data == null || response.data == undefined) {
        console.log("success");
      } else {
        console.log(response.data);
        // JSON.parse(response); // should fail
        // JSON.parse(response["data"]); // should work
        var result = JSON.parse(response.data)
        console.log(result.emailstatus) // or if you prefer this notation
        if (result.emailstatus == true && result.passwordstatus == true) {

          console.log(msgref.current.innerText);
          //msgref.current.style.visibility = "visible";
          msgref.current.style.display="block";
          setTimeout(() => {
            msgref.current.style.display="block";
            Cookies.set('Signin', true);
            navigate('/Home')
          }, 5000);
          setFocuspsd("")

        }
        else if (result.emailstatus == false && result.passwordstatus == false) {
          errmsg.current.style.display="block";
          setTimeout(() => {
            errmsg.current.style.display="none";
          }, 3000);
          
        }

        else if (result.emailstatus == true && result.passwordstatus == false) {
          errmsg2.current.style.display="block";
          setTimeout(() => {
            errmsg2.current.style.display="none";
          }, 3000);
          setTextclr("error")
          setFocuspsd("true")
        }

        








      };

    });


  }



  return (

 <div className='auth-wrapper '>   <div className='auth-inner'>

 <form onSubmit={handleSignupForm}>
   <h3 data-testid="MyHeading"> <PersonRoundedIcon fontSize='large' id="icon"/> Sign In</h3>
   <div> <TextField type="email" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required />  </div> 
<br></br>
   {/* <div className="mb-3">
     <label>Email address</label>
     <input
       type="email"
       className="form-control"
       placeholder="Enter email"
       required
       onChange={(e) => setEmail(e.target.value)}
     />
   </div> */}
   <div> <TextField type="password" id="outlined-basic" color={txtclr} focused={focuspsd} label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} required />  </div> 
<br></br>
   {/* <div className="mb-3">
     <label>Password</label>
     <input
       type="password"
       className="form-control"
       placeholder="Enter password"
       required="Please enter "
       onChange={(e) => setPassword(e.target.value)}
     />
     
   </div> */}
  
   <div className="d-grid">
   <Button type='submit' variant='contained' color="secondary">Sign In</Button>
     {/* <button type="submit" className="btn btn-primary">
       Submit
     </button> */}
   </div>
   <p className="forgot-password text-right">
      <a href="#">Forgot password?</a>
   </p>
  
   
   <div class="alert alert-success msg" ref={msgref} role="alert">
     Login Successful!
   </div>


   <div class="alert alert-danger msg" ref={errmsg} role="alert">
     Invalid email!
   </div>

   <div class="alert alert-danger msg" ref={errmsg2} role="alert">
     Incorrect Password!
   </div>
 </form>

 </div></div>
  )
}


export default Login;