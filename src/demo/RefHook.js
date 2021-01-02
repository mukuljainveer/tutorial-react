import React, { createRef, useEffect, useRef } from "react";

function RefHook() {
  const inputRef=useRef({
      focus:()=>{}
  })

  // useEffect(()=>{
  //     console.log('EFFECT: ')
  // })

  // useEffect(()=>{
  //     console.log('EFFECT DID MOUNT')
  // },[])

  // const getFocus=()=>{
  //     inputRef.current.focus()
  // }

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef.current]);

  return (
    <div>
      {console.log("RENDER RETURN")}
      <input placeholder="enter Name" ref={inputRef} />
      {/* <button onClick={getFocus}>Get Focus</button> */}
    </div>
  );
}

export default RefHook;
