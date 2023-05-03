import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ChefCard = (props) => {
    const data = props.data;
    const { chefName, chefPic, experience, numberOfRecipes, like } = data
    return (
        <div className='flex bg-orange-50 rounded-lg items-center'>
            <div className='w-1/2'>
                <img className='h-full rounded-lg' src={chefPic} alt="" />
            </div>
            <div className='ml-5'>
                <h3 className='text-3xl font-bold pt-4'>{chefName}</h3>
                <p className='pt-4 font-semibold'>Experience: {experience}</p>
                <p className='pt-4 font-semibold'>Recipes: {numberOfRecipes}</p>
                <div className='flex items-center pt-4'>
                    <FaHeart></FaHeart>
                    <p className='ml-2'> {like}</p>
                </div>
                <button className='btn mt-10'>View Recipes</button>

            </div>
        </div>
    );
};

export default ChefCard;