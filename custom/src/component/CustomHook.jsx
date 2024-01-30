import React, { useEffect, useState } from 'react'

function saveValue(initial){
    let value = localStorage.getItem("key")||sessionStorage.getItem("key")
    return value?value:initial
}



function CustomHook(initial) {
    const [state,setState]=useState(()=>{
       return saveValue(initial)
    });

    useEffect(()=>{
        localStorage.setItem("key",state)
        sessionStorage.setItem("key",state)
    },[state])  

     return ([state,setState]) 
}

export default CustomHook