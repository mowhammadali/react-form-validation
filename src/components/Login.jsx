import React, { useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import  { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "../styles/SignUp.module.css";
import {validation} from "./Validations";
import { notify } from "./Toast";

const Login = () => {

    const [data , setData] = useState({
        email: "",
        password: "",
    })

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({})

    useEffect(() => {
        setErrors(validation(data , "login"));
    } , [data , touched])


    const changeHandler = event => {
        setData({...data , [event.target.name]: event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched , [event.target.name]: true});
    }

    const submitHandler = event => {
        event.preventDefault();

        if(!Object.keys(errors).length){
            notify("success" , "You signed in successfully")
        }
        else{ 
            notify("error" , "Invalid data!")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted: true
            })
        }
    }


    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>email</label>
                    <input className={`${errors.email && touched.email ? styles.unCompleted : styles.formInput}`} type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input className={`${errors.password && touched.password ? styles.unCompleted : styles.formInput}`} type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.buttons}>
                <Link to="/SignUp">SignUp</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;