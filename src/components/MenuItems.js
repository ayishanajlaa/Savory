import React, { useState } from 'react';
import { data } from '../data/data.js';
import { motion, AnimatePresence } from "framer-motion";

const MenuItems = () => {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        if (category === 'all') {
            setFoods(data);
        } else {
            setFoods(data.filter(item => item.category === category));
        }
    };

    const filterPrice = (price) => {
        if (price === 'all') {
            setFoods(data);
        } else {
            setFoods(data.filter(item => item.price === price));
        }
    };

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-12'>
            <h1 className='text-yellow-600 font-bold text-4xl text-center mb-8'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between mb-6'>

                {/* Filter Type */}
                <div className='mb-4 lg:mb-0'>
                    <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
                    <div className='flex flex-wrap gap-2'>
                        {['all', 'steak', 'pizza', 'noodles', 'pasta', 'burger'].map(category => (
                            <button
                                key={category}
                                onClick={() => filterType(category)}
                                className={`filter-button ${foods[0]?.category === category ? 'bg-yellow-600 text-white' : 'text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white border'} rounded-xl px-5 py-1`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter Price */}
                <div className='mb-4 lg:mb-0'>
                    <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
                    <div className='flex flex-wrap gap-2'>
                        {['all', '$', '$$', '$$$', '$$$$'].map(price => (
                            <button
                                key={price}
                                onClick={() => filterPrice(price)}
                                className={`filter-button ${foods[0]?.price === price ? 'bg-yellow-600 text-white' : 'text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white border'} rounded-xl px-5 py-1`}
                            >
                                {price === 'all' ? 'All' : price}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Display Food */}
            <AnimatePresence>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {foods.map(item => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
                        >
                            <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                                <p>
                                    <span className='bg-yellow-500 text-white p-1 rounded-md'>{item.price}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default MenuItems;
