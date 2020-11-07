import React from 'react';
import style from './recipe.module.css'
const Recipes = ({title, calories, image, ingredients}) => {
    return ( 
        <div className={style.recipe}>
            <h2>{title}</h2>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Contains : {calories} calories</p>
            <img className={style.image} src={image} alt="" />
        </div>
     );
}
 
export default Recipes;