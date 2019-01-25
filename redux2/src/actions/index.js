import { BaseUrl } from '../constants/ApiUrl';

export function latestNews(){
    const output = fetch(`${BaseUrl}/articles?_end=3`,{method:'GET'})
        .then((data) => data.json())
    
    return{
        type:'GET_LATEST',
        payload:output
    }
}