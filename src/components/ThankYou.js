
import{React,useState}  from 'react';
import { Navigate} from 'react-router-dom';
function ThankYou() {
  const [open, setOpen] = useState(true);
if(open===false)
{
  return <Navigate to="/menu"/>
 }
      
  return (
      <div className='thank__you'>
          <h2>Welcome TO Food's Kitchen</h2>
         
         
          <button onClick={()=>{setOpen(false)}} >go to Menu
          </button>                  
    </div>
  )
}

export default ThankYou;