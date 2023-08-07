import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import {FormControl} from '@mui/material';
import {Input} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock';
import './signup.css';

const Login = () => {

    const [errors,setErrors]=useState({})

    const [values,setValues]=useState({
        email:'',
        password:''
    })

    const handleChange=(event)=>{
        setValues(prevState=>({...prevState,[event.target.name]:event.target.value}))
    }

    const navigate=useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values))

      axios.post('http://localhost:5000/login',values)
      .then(res=>{
        if(res.data==="success"){
            navigate('/home')
        }else{
            alert("No data existed")
        }
        
      })
      .catch(err=>console.log(err))

      console.log(values);
    };
  
    return (
        <Container component="main" maxWidth="xs">
          <div style={{marginTop:'1rem'}} >
            <Typography component="h1" variant="h5" sx={{textAlign:'center',color:'dodgerblue'}} >
              Sign in
            </Typography>
            <form className='' onSubmit={handleSubmit}>
              <FormControl className={''} fullWidth>
                <InputLabel htmlFor="email"  className='label' ><PersonIcon className='icon'/>Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  //required
                  className='input'
                />
                {errors.email && <span style={{color:'tomato',padding:'5px'}} > {errors.email} </span> }
              </FormControl>
              <FormControl className={''} fullWidth>
                <InputLabel htmlFor="password" className='label' > <LockIcon className='icon'/> Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  //required
                  className='input'
                />
                {errors.password && <span style={{color:'tomato',padding:'5px'}} > {errors.password} </span> }
              </FormControl>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className='button'
              >
                Login
              </Button>
              <Typography 
              variant='contained'
                color={'rosybrown'}
                fullWidth 
              >
              New User ? 
              </Typography>
              <Link to="/" className='button'><Button>Sign up</Button></Link>
            </form>
          </div>
        </Container>
      );
    


}

export default Login








  