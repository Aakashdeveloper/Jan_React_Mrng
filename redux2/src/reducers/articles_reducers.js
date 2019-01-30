export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state,latest:action.payload}
        case 'GET_OTHER':
            return {...state,other:action.payload}
        case 'GET_NEWS_DETAIL':
            return {...state,details:action.payload}
        case 'CLEAR_NEWS':
            return {...state,clearnews:action.payload}
        case 'HANDLE_LIKES_ARTICLE':
            return {...state,likedata:action.payload}
        default:
            return state;
    }
}