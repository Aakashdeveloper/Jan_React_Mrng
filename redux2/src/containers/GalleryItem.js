import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedGalllery, clearGallery} from '../actions';
import { bindActionCreators} from 'redux';
import Slider from 'react-slick';

import Counter from './LikeCounter';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class GalleryItem extends Component{

    componentDidMount(){
        this.props.selectedGalllery(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearGallery()
    }

    renderSlider = ({details}) => {
        if (details) {
          const gallery = details[0]
          return (
            <div>
              <h3>The best of {gallery.artist}</h3>
              <Slider {...settings}>
                {gallery.images.map((item,index) => {
                  return(
                    <div key={index} className="slide-item">
                      <div>
                        <div 
                        className="image"
                        style={{background:`url(/images/galleries/${item.img})`}}
                        >
                        </div>
                        <div className="description">
                          <span>{item.desc}</span>
                        </div>
    
                      </div>
                      
                      
                    </div>
                  )
                })}
              </Slider>
              <div>
                            <Counter
                             articleId={gallery.id}
                             likes={gallery.likes[0]}
                             dislikes={gallery.likes[1]}
                             section="galleries"
                             type="HANDLE_LIKES_GALLERY">

                            </Counter>
                </div>
            </div>

          )
    
        }
      }

    render(){
        return(
            <div className="slide-item-wrap">
            {this.renderSlider(this.props.galleryItem)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        galleryItem: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGalllery,clearGallery},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryItem);