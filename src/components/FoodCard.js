export const FoodCard = ({ title, description, image, buttonText }) => {
    return (
        <div className='rounded-xl relative overflow-hidden hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-center items-center'>
                <p className='font-bold text-lg md:text-xl px-4 text-center'>{title}</p>
                <p className='text-sm md:text-base px-4 text-center'>{description}</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-4 py-1 mt-4 shadow-md'>{buttonText}</button>
            </div>
            <img className='w-full h-[160px] md:h-[200px] object-cover rounded-xl' src={image} alt={title} />
        </div>
    );
}