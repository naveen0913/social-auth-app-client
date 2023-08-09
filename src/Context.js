import React, { createContext, useState } from 'react'
import axios from 'axios';
import { useEffect} from 'react';


export const myContext=createContext({});


export default function Context(props) {

    const [userObject,setUserobject]=useState()

    

    useEffect(() => {

        axios.get("http://fair-tan-walrus-tutu.cyclic.app/user",{withCredentials:true}).then(res=>{
            if(res.data){
                setUserobject(res.data)
                console.log(res.data);
            }
        })

    }, [])
    

  return (
    <div>
         <myContext.Provider value={userObject} > {props.children} </myContext.Provider>
    </div>
  )
}

