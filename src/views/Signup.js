import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Signup.css';
import useForm from '../hooks/useForm';
import axios from 'axios';

function Signup(){

    let history = useHistory();

    const sendData = (data) => {
        console.log(data)
        if(data.password === data.password_confirm){
            delete data.password_confirm
            axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", data)
                .then((response) => {
                    if(response.status === 200){
                        //cuando se crea el usuario lo mandamos al login
                        history.push("/login")
                        
                    }
                }).catch((error) => {
                    alert(error.response.data.message)
                })
        }else{
            alert("Password don't match")
        }
        
    }

    const {inputs, handleInputChange, handleSubmit} = useForm(sendData, {})

    return(
        
        <form className="signupView" onSubmit={handleSubmit}>

            <Navbar/>

            <div className="sign">

                <div className="signup">
                
                    <div className="formPart">
                        <label className="labelForm">Name</label>
                        <input type="text" 
                        className="form-fname" 
                        name="first_name" 
                        id="first_name" 
                        value={inputs.first_name}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="formPart">
                        <label className="labelForm">Last Name</label>
                        <input type="text" 
                        className="form-fname" 
                        name="last_name" 
                        id="last_name" 
                        value={inputs.last_name}
                        onChange={handleInputChange}
                        />
                    </div>

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

                    <div className="formPart">
                        <label className="labelForm">Confirm Password</label>
                        <input type="password" 
                        className="form-fname" 
                        name="password_confirm" 
                        id="confirm" 
                        value={inputs.password_confirm}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="formPart">
                        <label className="labelForm">Birth Date</label>
                        <input type="date" 
                        className="birth" 
                        name="birth_date" 
                        id="birth_date" 
                        value={inputs.birth_name}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="formPart">
                        <label className="labelForm">Gender</label>
                        <select name="gender" 
                        className="form-fname"
                        value={inputs.gender}
                        onChange={handleInputChange}
                        >
                            <option value="">Choose an option</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="X">x</option>

                        </select>
                    </div>

                    <div className="submit">
                        <button type="submit" className="button_submit">Submit</button>
                    </div>


                </div>
            </div>
        </form>

    )
}

export default Signup;