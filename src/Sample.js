
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import {FormControl} from '@mui/material';
import {Input} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
//import Validation from './SignupValidation';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';


const SignupPage = () => {

    //const [errors,setErrors]=useState({})

    const [values,setValues]=useState({
        username:'',
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        phone:''
    })

    const handleChange=(event)=>{
      setValues(prevState=>({...prevState,[event.target.name]:event.target.value}))
    }

    const navigate=useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault();
      //setErrors(Validation(values))
      axios.post('http://localhost:5000/signup',values)
      .then(res=>{
        navigate('/')
      })
      .catch(err=>console.log(err))
      
      console.log(values);
    };

  return (
       <div>   
      <Container component="main" maxWidth="xs" className='cont' >
        <Typography component="h1" variant="h5" sx={{textAlign:'center',color:'dodgerblue',marginTop:'25px',}} className='form' >
          Sign Up
        </Typography>
        <form className='form' action='' onSubmit={handleSubmit}>
        <FormControl className={'form-control'}  fullWidth>
         
          <InputLabel htmlFor="username"><PersonIcon className='icon'/>Username</InputLabel>
         
          <Input
              id="userame"
              name="username"
              value={values.username}
              onChange={handleChange}
              //required
              autoFocus
              className='input'
            />
           
          </FormControl>

          <FormControl className={''} fullWidth>
            <InputLabel htmlFor="firstname"> <BadgeIcon className='icon'  />First Name</InputLabel>
            <Input
              id="firstname"
              name="firstname"
              value={values.firstname} 
              onChange={handleChange}
              required
              autoFocus
              className='input'
            />
         
          </FormControl>

          <FormControl className={''} fullWidth>
            <InputLabel htmlFor="lastname"> <BadgeIcon className='icon'  />Last Name</InputLabel>
            <Input
              id="lastname"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              required
              className='input'
            />
            
          </FormControl>

          <FormControl className={''} fullWidth>
            <InputLabel htmlFor="email"> <AttachEmailIcon className='icon'  />Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
              className='input'
            />
           
          </FormControl>

          <FormControl className={''} fullWidth>
            <InputLabel htmlFor="password"> <LockIcon className='icon'  /> Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              required
              className='input'
            />
    
          </FormControl>
          <FormControl className={''} fullWidth>
            <InputLabel htmlFor="phone"> <PhoneIcon className='icon' />  Phone Number</InputLabel>
            <Input
              id="phone"
              name="phone"
              type="phone"
              value={values.phone}
              onChange={handleChange}
              required
              className='input'
            />
          </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           className='button'
          >
            Sign Up
          </Button>
          <Typography 
              variant='contained'
                color={'rosybrown'}
                marginTop='7px'
                fullWidth 
                className='input sub-cont'
                
              >
              Already User? 
              </Typography>
              <Link to="/login" className=''><Button>login</Button></Link>
              <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                    <span class="m--in">Sign In</span>
              </div>
        </form>
    </Container>
    
    </div>
  );
};


export default SignupPage;



