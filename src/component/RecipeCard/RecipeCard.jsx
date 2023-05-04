import React from 'react';

const RecipeCard = (props) => {
    const { recipeName, ingredients, cookingMethod } = props.data;
    console.log(recipeName)
    return (
        <div className='container mx-auto my-5'>
            <div tabIndex={0} className="collapse w-3/4 mx-auto  collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium text-center">
                    {recipeName}
                </div>
                <div className="collapse-content grid sm:grid-cols-1 lg:grid-cols-2">
                    <div>
                        <h1 className='my-3 text-xl font-bold'>Ingredients</h1>
                        {ingredients.map(ingredient => <li className='font-semibold my-2'>{ingredient}</li>)}
                    </div>
                    <div>
                        <h1 className='my-3 text-xl font-bold'>Steps</h1>
                        {cookingMethod.map(cook => <li className='font-semibold my-2'>{cook}</li>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;