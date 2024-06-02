import React, { useEffect } from 'react'
import SocketSingleton from '.'

function ExampleSingleton() {


  const socketClass = SocketSingleton.getInstance()


  useEffect(()=>{
    const URL = "wss://YOUR_SOCKET_URL"
    socketClass.connect(URL)


    socketClass.send('Hello, WebSocket!');

  },[])
 
  
}

export default ExampleSingleton