import React from 'react'

const Profile = () => {
    const color=
[
   "red",
   "black",
   "#DD63EB",
   "#EBB663",
   "#BCEB63",
   "#F2E513",

   

  
];
   
    return (
        <div className='box'>
        {color.map((color)=>(
      <div style={{
        width:"50px",
        padding:"20px",
        margin:"20px", 
        height:"50px",
        borderRadius:"50px",
        backgroundColor: color}}></div> 
        ))}
        </div>
    )
}

export default Profile
