
import React from 'react';
import { useState } from 'react';
import { Navigate,useHistory} from 'react-router-dom';
function ThankYou() {
  let navigate = useHistory(); 
  const routeChange = () =>{ 
    let path = `/menu`; 
    navigate.push(path);
  }
    const [gotoback, setGoToBack] = useState(true);
    if (gotoback === false)
        
    {
        return <Navigate to="/menu"/>
        }
      
  return (
      <div className='thank__you'>
          <h2>Welcome TO Food's Kitchen</h2>
         
         
          <button onClick={routeChange} >go to Menu
          </button>                  
    </div>
  )
}

export default ThankYou;