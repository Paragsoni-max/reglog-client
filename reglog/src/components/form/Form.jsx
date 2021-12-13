import React, { useState } from "react";
import "./form.css"
import Axios from "axios"
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const registerUser = async (e)=>{
    e.preventDefault()
    const res = Axios.post("http://localhost:7000/register",{data:{
      name,email,contact,password,cpassword
    }})
    if(res){
      window.alert("registered successfully")
    }else{
      window.alert("something went wrong")
    }
  }

  return (

    
    <div className="form-body">
      <h1>Register</h1>
      <form className="A-form">
        <input
          type="text"
          placeholder="...Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="...Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="...Contact"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="...Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="...Confirm Password"
          value={cpassword}
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
        />
        <input type="submit" value="Register" onClick={registerUser}/>
      </form>
    </div>
  );
};

export default Form;
