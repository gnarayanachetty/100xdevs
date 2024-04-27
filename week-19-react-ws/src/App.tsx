import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latMsg, setLatMsg] = useState('null')
  const [msg, setMsg] = useState('null')

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () =>{
      console.log('connected')
      setSocket(socket)
     
    }
    socket.onmessage = (message) =>{
      console.log('Received message:',message.data)
      setLatMsg(message.data);
    }

    return () =>{
      socket.close()
    }
  },[])

  if(!socket){
    return <div>
      ...Loading
    </div>
  }

  return (
    <>
    <input type="text" onChange={(e)=>{
      setMsg(e.target.value);
    }} />
    <button onClick={()=>{
      socket.send(msg)
    }}>

    </button>
    {latMsg}
    </>
  )
}

export default App
