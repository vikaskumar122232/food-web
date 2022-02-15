import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@material-ui/core';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
import { Link,Route,Routes} from 'react-router-dom';
import axios from 'axios';
import Oder from './Oder';
function Menu() {
 
  const [recipe,setRecipe] = useState([])
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood') 
        .then(res => {
          console.log(res.data);
          setRecipe(res.data.meals);
        })
        .catch(err => {
            console.log(err);
    })
  }, [])

  const recipeList = recipe.map((item) => {
       
    return     <div className="column">
                   <div className="card">
                         <img src={item.strMealThumb} alt=""/>
                          <h3>{ item.strMeal}</h3>
                          <p>Price:-{item.idMeal}</p>
                            <div className="menu__btn">
                                  <Link to="/oder"><Button >
                               
                                   <AddIcon/>  
                                 </Button>
                                 </Link>
                                 <Button>
                                   <RemoveIcon/>  
                                 </Button>
                          </div>
                   </div>
                 </div>
             


  })
return (
  <div className='menu__card'>
    <div className="row">
    {recipeList}
    </div>
    <Routes>
    <Route path='/oder' element={<Oder />} />
    </Routes>
    </div>

  )
}

export default Menu;