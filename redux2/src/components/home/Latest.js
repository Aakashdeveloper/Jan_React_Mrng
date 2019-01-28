import React from 'react';
import { Link} from 'react-router-dom';

const showLatest = ({articleData}) => {
    if(articleData){
        return articleData.map((data) => {
            return(
                <Link to={`/news/${data.id}`} key={data.id} className="item">
                    <div className="image_cover" 
                    style={{background:`url(/images/articles/${data.img})`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const LatestNews = (props) => {
    console.log('coming in latest',props);
    return (
        <div className="home-latest">
            {showLatest(props)}
        </div>
    )
}

export default LatestNews;