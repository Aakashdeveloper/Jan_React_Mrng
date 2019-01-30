import { BaseUrl } from '../constants/ApiUrl';

export function latestNews(){
    const output = fetch(`${BaseUrl}/articles?_end=3`,{method:'GET'})
        .then((data) => data.json());
    
    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function OtherNewsAction(){
    const output = fetch(`${BaseUrl}/articles?_start=3&_end=10`,{method:'GET'})
        .then((data) => data.json())
    return{
        type:'GET_OTHER',
        payload:output
    }
}

export function GalleryAction(){
    const output = fetch(`${BaseUrl}/galleries`,{method:'GET'})
        .then((data) => data.json())
    
    return{
        type:'GET_LATEST_GALLERY',
        payload:output
    }
}

//////////////////
 export function selectedNews(id){
     const output = fetch(`${BaseUrl}/articles?id=${id}`,{
         method:'GET'
     })
     .then(res => res.json())

     return{
         type:'GET_NEWS_DETAIL',
         payload: output
     }
 }

 export function clearNews(){
     return{
         type:'CLEAR_NEWS',
         payload: []
     }
 }

 /////////////
 export function selectedGalllery(id){
    const output = fetch(`${BaseUrl}/galleries?id=${id}`,{
        method:'GET'
    })
    .then(res => res.json())

    return{
        type:'GET_GALLERY_DETAIL',
        payload: output
    }
 }
 
export function  clearGallery(){
     return{
         type:'CLEAR_GALLERY',
         payload: []
     }
 }


 export function handleLikes(array, id, section, type){
        const out = fetch(`${BaseUrl}/${section}/${id}`,{
            method: 'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({likes:array})
        })
        .then(response => response.json())

        return{
            type:type,
            payload:out
        }
 }