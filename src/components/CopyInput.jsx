
import {useState, usestate} from 'react'
const CopyInput = () => {
    const [inputValue,setvalue] = useState('')
    const [copied, setCopied] = useState(false)
   const handleCopy = e =>{
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopied(true);
        setTimeout(()=> setCopied(false),2000);
    })
   } 
  
  
    return (
    <div>
 <input type="text" value={inputValue} onChange={e => setvalue(e.target.value)} />
    
    <button onClick={handleCopy}>Copy</button>
    
    </div>
  )
}
//React portal Example.
export default CopyInput