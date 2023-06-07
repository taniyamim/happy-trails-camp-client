import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (

        <div className="carousel w-full h-3/4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn.cdnparenting.com/articles/2019/04/01163339/Summer-Camp-for-Kids-519357010.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle"></a>
                    <a href="#slide2" className="btn btn-circle"></a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-60 p-5">
                    <h3 className="text-3xl font-bold text-rose-600">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://adayinourshoes.com/wp-content/uploads/kids-at-summer-camp.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle"></a>
                    <a href="#slide3" className="btn btn-circle"></a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-60 p-5">
                    <h3 className="text-3xl font-bold text-rose-600">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://static.parenting.com/wp-content/uploads/2010/12/16154002/summer-camp-at-home-1200x720.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle"></a>
                    <a href="#slide4" className="btn btn-circle"></a>
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center bg-white bg-opacity-60 p-5">
                    <h3 className="text-3xl font-bold text-rose-600">Unleash Your Creativity</h3>
                    <p className="text-lg text-black font-bold">Join us this summer for an arts and crafts adventure like no other. Discover a world of colors, textures, and endless possibilities.</p>
                </div>
            </div>
        </div>



    );
};

export default Banner;