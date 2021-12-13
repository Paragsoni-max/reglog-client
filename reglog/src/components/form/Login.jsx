import React, { useState } from "react";
import "./login.css"

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  

  const loginUser = async(e)=>{
    e.preventDefault();
    const res = Axios.post("http://localhost:7000/login",{data:{
      email,password
    }})
    if(res){
      window.alert("login successful")
    }else{
      window.alert("something went wrong")
    }
  }

  return (

    
    <div className="login-form-body">
      <h1>Login</h1>
      <form className="L-form">
        
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
          placeholder="...Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
        <input type="submit" value="Login" onClick={loginUser} />
      </form>
    </div>
  );
};

export default Form;
