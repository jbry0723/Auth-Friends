import React, {useEffect, useState} from "react"
import axios from "axios"


export const Login=(props)=>{
    const initialUsers={
        username: "",
        password: ""
    }
    const [credentials, setCredentials]=useState(initialUsers)
    const [isLoading, setIsLoading]=useState(false)

    const handleChanges = e => {
        setCredentials({...credentials,[e.target.name]:e.target.value})
      };

    const login=e=>{
        e.preventDefault();
        axios
        .post ("http://localhost:5000/api/login", credentials)
        .then((resp)=>{
            console.log("resp.data",resp.data)
            localStorage.setItem("token",resp.data.payload)
            props.history.push('/friendslist')

        })
        .catch ((err)=>{
            console.log('error',err)
        })
    }

    return(
        <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
            placeholder="Enter Username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
            placeholder="Enter Password"
          />
          <button>Log in</button>
        </form>
      </div>

    )
}