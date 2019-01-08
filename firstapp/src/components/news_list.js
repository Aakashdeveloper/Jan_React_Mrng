import React from 'react';

const NewsList = (props) => {
    //console.log(props)
    const output = props.newsData.map((item)=>{
        return(
            <div key={item.id}>
                <h2>{item.title}</h2>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })
    return(
        <div>
            {output}
        </div>
    )
}

export default NewsList;