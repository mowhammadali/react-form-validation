export const validation = (data , type) => {

    const errors = {}

    if(!data.email){
        errors.email = "email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "email address is invalid"
    }
    else{
        delete errors.email;
    }

    if(!data.password){
        errors.password = "password is required";
    }
    else if(data.password.length < 8){
        errors.password = "password need to be 8 character or more";
    }
    else{
        delete errors.password;
    }


    if(type === "SignUp"){

        if(!data.name.trim()){
            errors.name = "name is required";
        }
        else{
            delete errors.name;
        }

        if(!data.confirmPassword){
            errors.confirmPassword = "confirm password required";
        }
        else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "password do not match";
        }
        else{
            delete errors.confirmPassword;
        }
    
        if(data.isAccepted){
            delete errors.isAccepted;
        }
        else{
            errors.isAccepted = "accept our regulations";
        }
    }

    return errors;
} 