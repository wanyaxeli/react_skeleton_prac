import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardSkeleton({card}) {
  return (
    <>
     {Array(8).fill(0).map((item,i)=>{
        return(
        <div key={i} className='user_wrapper'>
            <div className='user_imge_wrapper'>
                <Skeleton circle width={40} height={40}/>
            </div>
            <div className='user_details_wrapper'>
                <Skeleton count={4} style={{marginTop:5}}/>
                <div className='btnWrapper'  >
                    <Skeleton width={80} height={30} />
                </div>
            </div>
        </div>
        )
     })}
    </>
   
  )
}
