import React, { useEffect, useState } from "react"

function Book({id,title,author,deletee}){
    
    const [liked,setLiked]=useState(false)

    const Like=()=>{
        setLiked(!liked)
    }

    return(
        <>
        <h2>{title}</h2>
        <p>{author}</p>
        <button onClick={Like}>{liked ? 'love' : 'LIKE'}</button>
        <button onClick={()=>deletee(id)}>Delete</button>
        </>
    )
}
export default Book