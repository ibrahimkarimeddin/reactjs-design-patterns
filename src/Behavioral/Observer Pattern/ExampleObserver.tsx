import axios from 'axios'
import React from 'react'
import { ObserverGetRequest } from '.'

function ExampleObserver() {

     
    const myObserver :ObserverGetRequest = new ObserverGetRequest()
    myObserver.addObserver({key:"user",fetch:()=>axios.get("GET_ALL_USER")})
    myObserver.addObserver({key:"user",fetch:()=>axios.get("GET_ALL_USER_ADDRESS")})
    myObserver.addObserver({key:"posts",fetch:()=>axios.get("GET_ALL_POSTS")})
    


    const handelAddUser =async ()=>{
        await axios.post("ADD_USER_URL")
        // This Line Will Refetch Every Api Have user key  when Every Time you Add user 
        myObserver.notifyObservers('user')
    }
  return (
    <div>
        <button onClick={handelAddUser}>ADD USER</button>
    </div>
  )
}

export default ExampleObserver