import React from 'react'
import { myContext } from './Context'
import { useContext } from 'react'
import { useState } from 'react'
import './Types.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField';

const Home = () => {

  const userObject=useContext(myContext)
  console.log(userObject);
 
  const [provider,setProvider]=useState(false)

  const noChange=()=>{
    const provider=userObject?.provider
    if(provider===`twitter`){
      setProvider(!provider)
    }else if (provider===`linkedin`) {
      setProvider(!provider)
    }else{
      return null
    }
  }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [career, setCareer] = useState('');
  const [skills, setSkills] = useState('');
  const [work, setWork] = useState('');

  const [photo,setPhoto] = useState(null);
  const [message, setMessage] = useState('');


  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };


  const handleSave = () => {

    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('career', career);
    formData.append('skills', skills);
    formData.append('work', work);
    formData.append('photo', photo);

    //post request from the axios
    axios.post('https://social-system.onrender.com/add',formData)
    .then((res)=>{
      setMessage('photo uploaded Successfully')
      alert("data updated successfully")
      console.log(res.data);
    })
    .catch((err)=>{
      console.error(err);
      alert("failed to submit data")
    })

  }  
  const removeId=()=>{
    localStorage.removeItem("userid",userObject?.id)
  }

  const [profilePicture, setProfilePicture] = useState(null);

  const handlefilechange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit=async()=>{

  
    try{

      if(!profilePicture){
        throw new Error ("select a picture")
      }

      const Imagedata=new ImageData();
      Imagedata.append('profilePicture',profilePicture)

      const response=await axios.post('https://social-system.onrender.com/update-profile-picture', Imagedata);

      if(response.status===200){
        console.log('Profile picture updated successfully.');
      }else{
        console.error('Failed to update profile picture:', response.data.error);
      }
    }catch(error){
    console.error(error.message);
}
}

  return (
    <div>
    <>
      <div class="container">
    <div class="main-body">
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">
              Profile
              </li>
            </ul>
          </nav>
          <div class="row gutters-sm">
            <div class="col-md-3 mb-3">
              <div class="card">
                <div class="card-body">
                 <div class="d-flex flex-column align-items-center text-center">
                 <div>
                 <form onSubmit={''}>
                  <img src= {userObject?.photos[0].value } 
                     alt="logined-User" className="rounded-circle mt-2 mb-2" 
                     width="150"
                    /> 
                    <input type="file" 
                     onChange={handlefilechange}
                     id="profilePicture" name="profilePicture" 
                     accept=".jpg, .jpeg, .png" 
                    />  
                <button type='submit' onClick={handleSubmit} className='btn-btn-outline-success' >  Post my favorite picture</button>
                  </form>
                 </div>
                    <div className="mt-3">
                      <h5 style={{color:'brown'}} >Username : 
                      <span onChange={noChange} style={{color:'blue',fontFamily:'serif',fontStyle:'normal',fontSize:'25px'}} > 
                        {!provider && userObject?._json.screen_name ?  userObject?._json.screen_name : userObject?.displayName}
                      </span>
                      </h5>
                    <h5 style={{color:'brown'}} >Signed in by : 
                      <span onChange={noChange} style={{color:'red',fontFamily:'serif',fontStyle:'normal',fontSize:'25px'}} >
                            {userObject?.provider}
                      </span> 
                    </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-column align-items-center'>
                <Link to='/'> <button className='btn btn-outline-danger' onClick={removeId}  > Log out </button> </Link>
              </div>
            </div>
          
            <form className='col-md-9' onSubmit={handleSave} method='POST' action='' >
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
               
                  <div class="row">
                  <h3 className='text-center mb-3 mt-1 user-heading ' >User details</h3>
                    <div className="col-sm-1">
                      <h6 className="mb-0" style={{fontFamily:'inherit'}} >  </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">

             <TextField id="outlined-basic"  className='home-text-field'
             sx={{marginBottom:'10px'}}
              variant="standard"
              type='text'
              name="username"
              value={name}
              label="full name"
              onChange={(e) => setName(e.target.value)}
              required
           />

                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0"> </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <TextField id="outlined-basic"  className='home-text-field'
             sx={{marginBottom:'10px'}}
              variant="standard"
              type='text'
              name="email"
              value={email}
              label="email"
              onChange={(e) => setEmail(e.target.value)}
              required
           />
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0"> </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <TextField id="outlined-basic"  className='home-text-field'
                  sx={{marginBottom:'10px'}}
                 variant="standard"
                 type='number'
                 name="phone"
                 value={phone}
                label="Mobile Number"
                onChange={(e) => setPhone(e.target.value)}
                required
           />
              </div>
            </div>
                  

                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0"> </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <span>

                    <TextField id="outlined-basic"  className='home-text-field'
             sx={{marginBottom:'10px'}}
              variant="standard"
              type='text'
              name="address"
              value={address}
              label="Description"
              onChange={(e) => setAddress(e.target.value)}
              required
           />
                    </span> 
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0"> </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <span>
                    <TextField type='text'
                      sx={{marginBottom:'10px'}}
                      className='home-text-field'
                     label='Education'
                     variant='standard'
                      name='career'
                      value={career}
                      required
                      onChange={(e) => setCareer(e.target.value)}
                     />
                    </span> 
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0"> </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <span>
                    <TextField type='text'
                      sx={{marginBottom:'10px'}}
                      className='home-text-field'
                     label='Skills with comma'
                     variant='standard'
                      name='career'
                      value={skills}
                      required
                      onChange={(e) => setSkills(e.target.value)}
                     />
                    </span> 
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-1">
                      <h6 class="mb-0">  </h6>
                    </div>
                    <div class="col-sm-11 text-secondary">
                    <span>
                    <TextField type='text'
                      sx={{marginBottom:'10px'}}
                      className='home-text-field'
                     label='Experience (in months)'
                     variant='standard'
                      name='work'
                      value={work}
                      required
                      onChange={(e) => setWork(e.target.value)}
                     />
                    </span> 
                    </div>
                  </div>
                  <hr/>
                 
                </div>
              </div>
          
                <div className="col-sm-6 mb-3">
                  <div className="card h-100" >
                    <div className="card-body">

                    {/*    Uploading our favourite picture from our device  */}

                    <h5 className='text-center mt-1' style={{color:'brown',fontFamily:'serif',fontStyle:'normal'}} >
                    User Sample Photo
                     </h5>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {message && <p className='text-center' >{message}</p>}
                {photo && <img src={URL.createObjectURL(photo)} alt="Uploaded" className='mt-1' style={{width:'100%',height:'50%'}} />}
                    </div>
                  </div>
                </div>
                  <button className='btn btn-outline-success' style={{margin:'auto'}}  type='button' onClick={handleSave} >
                      Save Details
                    </button>
              </div>
            </form>
            </div>
          </div>
         
        </div>
        </>
    </div>
  )
}

export default Home
