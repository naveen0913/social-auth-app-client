function Validation(values){
    
    let error={}

    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const phoneNumberPattern=/^[6-9]\d{9}$/



    if(values.username===""){
        error.username="*Fill out the field"
    }else{
        error.username=""
    }

    
    if(values.firstname===""){
        error.firstname="*Fill out the field"
    }else{
        error.firstname=""
    }
    
    
    if(values.lastname===""){
        error.lastname="*Fill out the field"
    }else{
        error.username=""
    }


    if(values.email===""){
        error.email="*Fill out the field "
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
        error.password="Fill out the field using Capital letters , Numbers and atleast 1 Special Character "
    }else{
        error.password=""
    }

    if(values.phone===""){
        error.phone="Fill out the field"

    }else if(!phoneNumberPattern.test(values.phone)){
        error.phone="Enter a valid Phone number"
    }else{
        error.phone=""
    }


    return error

}

export default Validation