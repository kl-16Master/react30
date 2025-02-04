import React, { useState } from 'react'

const Switcher = () => {
  
  const [sw,setSw] = useState(false);
  
    return (
    <div>

{
    sw ? (
        <span>Dark</span>
    ):(
        <span>Light</span>
    )
}
<br />

<input type="text" key={sw ? "dasrk" :"light"} />
<button onClick={() => setSw((s)=> !s)}>
    Switch
    </button> 
    
      </div>
  )
}

export default Switcher