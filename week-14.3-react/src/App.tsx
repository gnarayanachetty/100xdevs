import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState({
    name:'',
    email:''
  })
  useEffect(()=>{
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then((resp)=>{
      setData(resp.data);
      setLoading(false);
    })

  },[]);

  if(loading)
  return '....loading';

  return (
    <>
      <div>
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
    </>
  )
}

export default App
