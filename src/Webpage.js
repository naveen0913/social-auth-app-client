import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';
import './Webpage.css'
import { myContext } from './Context';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';


const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const [values,setValues]=useState({
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    phone:''
  })


  const toggleForm = () => {
    setLoginVisible((prevState) => !prevState);
  };

  const handleChange=(event)=>{
    setValues(prevState=>({...prevState,[event.target.name]:event.target.value}))
  }

  const navigate=useNavigate()

  //This function is for user had already who signed up succesfully, Can log in Manually
  const handlelogin = (event) => {

    event.preventDefault();
    //setErrors(Validation(values))
    axios.post('http://fair-tan-walrus-tutu.cyclic.app/login',values)
    .then(res=>{
      if(res.data==="success"){
        navigate('/home')
      }else{
        alert("No data existed..! SignUp first.")
        
      }
     
      })
      .catch(err=>console.log(err))  
      console.log(values);

  };


  //This function is for First time user signing up with his details
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://fair-tan-walrus-tutu.cyclic.app/signup',values)
    .then(res=>{
      if(res.status===200){
        alert("signup Succesfull..! login Now ")
        console.log(res);
      }
    })
  }

  const userObject=useContext(myContext)
  console.log(userObject);
  
  
  const [authToken, setAuthToken] = useState('');

  const twitterLogin=async()=>{

    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');

    if(token){
      localStorage.setItem('authtoken',token);
      setAuthToken(token)
      window.open("https//fair-tan-walrus-tutu.cyclic.app/auth/twitter","_self")

    }else{
      console.error("token not found");
    }

    localStorage.setItem("userid",userObject?.id)
    window.open("http://fair-tan-walrus-tutu.cyclic.app/auth/twitter","_self")    
  }

  const instagramLogin=()=>{
    localStorage.setItem("userid",userObject?.id)
    //window.open("http://localhost:5000/auth/instagram","_self")
  }

  

  const linkedinlogin=()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');

    if(token){
      localStorage.setItem('authtoken',token);
      setAuthToken(token)
      window.open("http://fair-tan-walrus-tutu.cyclic.app/auth/linkedin","_self")
    }else{
      console.error("token not found");
    }

    localStorage.setItem("userid",userObject?.id)
    window.open("http://fair-tan-walrus-tutu.cyclic.app/auth/linkedin","_self")
    
  }


  return (
  
    <div className="app ">
      <div className={`form-container ${isLoginVisible ? 'signup' : 'login'}`}> 
        <form className="login-form" onSubmit={handlelogin}>
        <h2>Welcome Back...!</h2>
          <img src='https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?size=626&ext=jpg&ga=GA1.2.1796795842.1690885627&semt=ais'
            alt='login-img' className='login-img' />
          <h3 className='login-head'> </h3>
      
          <TextField id="outlined-basic"  
          sx={{marginBottom:'12px',border:'black'}}
          className='text-field'
           label="Email"
           variant="outlined"
           type='email'
              name="email"
              value={values.email}
              onChange={handleChange}
              required
           />

          <TextField id="outlined-basic"  sx={{marginBottom:'5px'}}
          className='text-field'
           label="Password"
           variant="outlined"
           type='password'
              name="password"
              value={values.password}
              onChange={handleChange}
              required
           />

          <button className='login-button' type="submit">Login</button>
          <p onClick={toggleForm} className='login-signup-line'> Don't have an account? Sign up </p>
          
        </form>

        <form className="signup-form  " action='' onSubmit={handleSubmit}>
        <div className='social-container' >
        <div className="left">
        <h4 style={{fontZize: '0.9rem',textAlign:'center'}} className="bts-a">Don't have an account? <span style={{color:'blue'}} > Sign Up then..!</span></h4>
          <div className="bts ">
          {
            !authToken &&
            <p className="fblogin social" 
                onClick={linkedinlogin} >
                <LinkedInIcon className='icon1' />
                <span>Sign up with linkedin</span></p>
          } 
          {
            !authToken && 
            <p className="twlogin social" onClick={twitterLogin} >
            <TwitterIcon className='icon2' />
             <span>Sign up with Twitter</span>
            </p>
          }   
            
          <p className="gplogin social" onClick={instagramLogin} ><InstagramIcon className='icon3' /><span>Sign up with Instagram</span></p>             
          </div>
        </div>
        </div>
        <h3 className='heading-or'>or</h3>  
        
          <TextField id="outlined-basic"  className='text-field'
          sx={{marginBottom:'10px'}}
           label="User Name"
           variant="outlined"
           type='text'
              name="username"
              value={values.username}
              onChange={handleChange}
              required
           />

          <div className='name-container' >

          <TextField id="outlined-basic"  className='text-field-name'
          sx={{marginBottom:'10px'}}
           label="First Name"
           variant="outlined"
           type='text'
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              required
           />
          <TextField id="outlined-basic"  
          className='text-field-name'
          sx={{marginBottom:'10px'}}
           label="Last Name"
           variant="outlined"
           type='text'
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              required
           />

          </div>
         
         <div className='name-container'>

         <TextField id="outlined-basic"  
          sx={{marginBottom:'3px'}}
          className='text-field-name-1'
           label="Email"
           variant="outlined"
           type='email'
              name="email"
              value={values.email}
              onChange={handleChange}
              required
           />

          <TextField id="outlined-basic"  sx={{marginBottom:'3px'}} 
          className='text-field-name-1'
           label="Password"
           variant="outlined"
           type='password'
              name="password"
              value={values.password}
              onChange={handleChange}
              required
           />
      
          </div>

          <TextField id="outlined-basic" className='text-field'
          sx={{marginTop:'8px',marginBottom:'3px'}}
           label= "Phone Number"
           variant="outlined"
           type='number'
              name="phone"
              value={values.phone}
              onChange={handleChange}
              required
           />

          <button className='login-button' type="submit">Sign Up</button>

          <p onClick={toggleForm} className='login-signup-line' >Already have an account? Login</p>
         
        </form>
      </div>
    </div>
 
  );
};

export default App;

