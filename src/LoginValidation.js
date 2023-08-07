function Validation(values){
    
    let error={}

    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(values.email===""){
        error.email="*Fill out the field"
    }
    else if(!emailPattern.test(values.email)){
        error.email="Enter a vaild email"
    }else{
        error.email=""
    }

    if(values.password===""){
        error.password="*Fill out the field"
    }
    else if(!passwordPattern.test(values.password)){
        error.password="Enter a vaild password"
    }else{
        error.password=""
    }

    return error

}

export default Validation