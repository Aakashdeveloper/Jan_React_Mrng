import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGalllery = ({galleryData}) => {
    if(galleryData){
        return(
            <Slider {...settings}>
            {galleryData.map((item)=>{
                return(
                    <Link to={`/galleries/${item.id}`} 
                    key={item.id}
                    className="slider-item">
                        <div className="image" style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                            <h3>{item.artist}</h3>
                        </div>                        
                    </Link>
                )
            })}
        </Slider>
        )
    }

}

const Gallery = (props) => {
    console.log('in gallery', props)
    return(
        <div className="home-gallery">
            <h2>Image Gallery</h2>
            {showGalllery(props)}
        </div>
    )
}

export default Gallery;