import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className=''>
            <div>
                <img src="https://cdn.cdnparenting.com/articles/2019/04/01163339/Summer-Camp-for-Kids-519357010.webp" alt="Arts and Crafts" className='h-2/5' />
               
            </div>
            <div>
                <img src="https://adayinourshoes.com/wp-content/uploads/kids-at-summer-camp.jpg" alt="Fun and Learning" className='h-2/5' />
                
            </div>
            <div>
                <img src="https://static.parenting.com/wp-content/uploads/2010/12/16154002/summer-camp-at-home-1200x720.jpg" alt="Artistic Expression" className='h-2/5' />
                
            </div>

        </Carousel>
    );
};

export default Banner;