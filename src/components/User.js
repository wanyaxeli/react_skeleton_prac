
import React,{useEffect,useState} from 'react'
import img from "../assets/pic4.jpg"
function User({data}) {
  return (
    <>
     {data.map(item=>{
        return(
        <div key={item.id} className='user_wrapper'>
            <div className='user_imge_wrapper'>
                <img  src={img}/>
            </div>
            <div className='user_details_wrapper'>
                
                <ul>
                    <li>Name: {item.name}</li>
                    <li>username:{item.username}</li>
                    <li>email:{item.email}</li>
                </ul>
                <div className='btnWrapper'>
                <button>Edit</button>
                </div>
            </div>
       </div>
        )
     })}
    </>
  )
}

export default User