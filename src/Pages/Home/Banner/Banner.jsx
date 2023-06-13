import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
    return (

        <div className="carousel w-full h-3/5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://static.vecteezy.com/system/resources/previews/001/211/784/original/sticker-design-for-summer-camp-with-many-kids-at-the-camp-vector.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle"> <AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle"> <AiOutlineArrowRight></AiOutlineArrowRight> </a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-70 p-5">
                    <h3 className="text-5xl font-extrabold text-green-950">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.atlantahistorycenter.com/app/uploads/2022/12/01_EDU_FY23_SummerCamp_VideoGraphics_Intro-1440x810.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-60 p-5">
                    <h3 className="text-5xl font-extrabold text-orange-600">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://cdn2.hubspot.net/hubfs/2781691/Blog%20Images/Summer-camps-2024-0319.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-60 p-5">
                    <h3 className="text-5xl font-extrabold text-yellow-700">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
        </div>



    );
};

export default Banner;