import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PosterCarousel.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const bannerImg = [
    {
        id: 1,
        img: 'https://c4.wallpaperflare.com/wallpaper/622/961/80/movie-venom-wallpaper-preview.jpg'
    }, 
    {
        id:2,
        img:'https://c4.wallpaperflare.com/wallpaper/968/387/691/joker-movies-artwork-joaquin-phoenix-joker-2019-movie-hd-wallpaper-preview.jpg'
    },
    {
        id:3,
        img:'https://c4.wallpaperflare.com/wallpaper/200/1016/942/deadpool-movies-marvel-comics-wallpaper-preview.jpg'
    }
]

const PosterCarousel = () => {
    const [bannerImage,setBannerImage] = useState(bannerImg);

    return (
        <Carousel  autoPlay={true} autoPlaySpeed={3000} infinite={true} className='carouselDiv' responsive={responsive}>
            {
                bannerImage.map(ele=>{
                    return <img width='100%' height='100%' key={ele.id} src={ele.img}/>
                })
            }
        </Carousel>
    )
}

export default PosterCarousel