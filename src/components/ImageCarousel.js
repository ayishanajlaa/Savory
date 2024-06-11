import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
    return (
        <Carousel
            className="max-w-[1240px] mx-auto"
            showThumbs={false}
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            autoPlay
            infiniteLoop
        >
            {["https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1671442131445-a99f2e59850a?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ].map((src, index) => (
                <div className='max-w-[1240px] mx-auto p-4' key={index}>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='px-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>
                            Savor <span className='text-yellow-500'>Every Bite</span>
                            </h1>
                            <h1 className='px-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>
                                <span className='text-yellow-500'>Delivered </span>with Care
                            </h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src={src} alt={`Slide ${index + 1}`} />
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
