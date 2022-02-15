import {React,useState} from 'react'
import {Navigate} from 'react-router-dom'
function Oder() {
    const [open, setOpen] = useState(false)
    if (open === false) {
      return <Navigate to="./menu"/>
    }
    return (
        <div>
            <h4>thank you for your oder.</h4>
            <button onClick={() => { setOpen(false) }} />
        </div>
  
    );
}

export default Oder