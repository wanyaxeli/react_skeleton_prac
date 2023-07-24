import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import User from './components/User';
import React,{useEffect,useState} from 'react'
import CardSkeleton from './components/Skeleton';

function App() {
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  function getUsers(){
      const endpoint='https://jsonplaceholder.typicode.com/users'
      axios.get(endpoint)
      .then(res=>{
          setData(res.data)
          setIsLoading(false)
      })
  }
  useEffect(()=>{
  setTimeout(()=>getUsers(),1000)
  },[])
  return (
    <div className="App">
     {isLoading? <CardSkeleton card={8}/>: <User data={data}/>}
    </div>
  );
}

export default App;
