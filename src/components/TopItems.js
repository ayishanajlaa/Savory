import React from 'react';

import { FoodCard } from './FoodCard';
 

const TopItems = () => {
    const foodItems = [
        {
            title: 'Grilled T-Bone Temptation',
            description: 'Perfectly grilled and juicy',
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHwwfDB8fHww',
            buttonText: 'Order Now'
        },
        {
            title: 'Delicious Burger',
            description: 'Classic beef burger with fresh toppings',
            image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D',
            buttonText: 'Order Now'
        },
        {
            title: 'Fragrant Basil Pad Thai',
            description: 'Authentic noodles cooked to perfection',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfDB8MHx8fDA%3D',
            buttonText: 'Order Now'
        }
    ];

    return (
        <div className='max-w-[1240px] mx-auto p-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {foodItems.map((food, index) => (
                <FoodCard key={index} {...food} />
            ))}
        </div>
    );
}

export default TopItems;
