import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import axios from 'axios';
import './Login.css'

function Login(){

    let history = useHistory();

    const sendData = (data) => {
        
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/login", data)
            .then((response) => {
                console.log(response.data)
                // session.storage
                // local.storage
                window.localStorage.setItem("token", response.data.token) //esto agrega algo nuevo al localstorage
                history.push("/")
                        
                
            }).catch((error) => {
                alert(error.response.data.message)
            })
        
        
    }

    const {inputs, handleInputChange, handleSubmit} = useForm(sendData, {})

    return(
        <form className="loginView" onSubmit={handleSubmit}>

        <Navbar/>

        <div className="log">

            <div className="login">
    

                <div className="formPart">
                    <label className="labelForm">Email</label>
                    <input type="email" 
                    className="form-fname" 
                    name="email" 
                    id="email" 
                    value={inputs.email}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="formPart">
                    <label className="labelForm">Password</label>
                    <input type="password" 
                    className="form-fname" 
                    name="password" 
                    id="password" 
                    value={inputs.password}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="submit">
                    <button type="submit" className="button_submit">Submit</button>
                </div>


            </div>
        </div>
    </form>
    )
    

}

export default Login;