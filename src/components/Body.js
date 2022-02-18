import { React } from 'react';
import { Link } from 'react-router-dom';
function Body() {
  return (
    <div className='body'>
      <h2>Wellcome To the Food's Kitchen.!</h2>
      <Link to="/menu">
        <button>Go to the menu</button>
      </Link>
    </div>
  )
}
export default Body;