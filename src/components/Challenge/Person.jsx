import React from 'react'

export default function
Person(props) {



  return (
    <>
     <div className="card">
         <img src={props.img} alt="" />
         <div className="overlay">
            <h1>Name: {props.name} </h1>
            <h2>Age: {props.age} </h2>
         </div>
     </div>
    </>
  )
}
