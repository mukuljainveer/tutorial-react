import React, { useEffect, useState } from 'react'

function CustomAudioPlayer() {
    const [url,setUrl]=useState(null);

    useEffect(()=>{
        console.log(url)
        console.log('RELOADING..')
    },[url])

    const fileHandler=async (e)=>{
        const file=e.target.files[0]
        const urlCust=await URL.createObjectURL(file) 
        console.log('urlCust: ' ,urlCust)
        
        setUrl(urlCust)
    }

    return (
        <div>
            <input name="audio" type="file" onChange={fileHandler}/>
            <audio controls autoPlay>
                <source src={url} />
            </audio>
        </div>
    )
}

export default CustomAudioPlayer
