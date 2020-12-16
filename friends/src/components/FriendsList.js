import axios from "axios"
import React, {useEffect, useState} from "react"
import {Friend} from "./Friend"


const initialState={
    id:"",
    name:"",
    age: "",
    email:"",

}


export const FriendsList=(props)=>{
    const [friendsArray,setFriendsArray]=useState([])
    const [newFriend,setNewFriend]=useState(initialState)

    

    useEffect(() => {
        getFriends()
        
      }, [])
    
     const getFriends=()=>{
          axios
            .get("http://localhost:5000/api/friends",{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then((resp)=>{
                
                setFriendsArray(resp.data)
            })
            .catch ((err)=>{
                console.log("friends error", err)
            })
      }
    
      const submitFriend=(e)=>{
        e.preventDefault()
        console.log(newFriend)
        axios
            .post("http://localhost:5000/api/friends",newFriend,{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then(resp=>{
                console.log("friend post resp:", resp)
                setFriendsArray(resp.data)
            })
            .catch((err)=>{
                console.log(err)
            })

      }
      

      const handleChanges = e => {
        setNewFriend({...newFriend,[e.target.name]:e.target.value})
      };

      
      
     

      

    return(
        <div>
            <form onSubmit={submitFriend}>
          <input
            type="text"
            name="id"
            value={newFriend.id}
            onChange={handleChanges}
            placeholder="Enter ID"
          />
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChanges}
            placeholder="Enter name"
          />
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={handleChanges}
            placeholder="Enter age"
          />
          <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={handleChanges}
            placeholder="Enter email"
          />
          <button>Submit Friend</button>
        </form>
            <div>
          {friendsArray.map(friend=>{
              
        return <Friend key={friend.id} id={friend.id} name={friend.name} age={friend.age} email={friend.email}></Friend>
   })}
            </div>
        </div>
    )
}