export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST_GALLERY':
            return {...state,gallery:action.payload}
        case 'GET_GALLERY_DETAIL':
            return {...state,details:action.payload}
        case 'CLEAR_GALLERY':
            return {...state,clearnews:action.payload}
        case 'HANDLE_LIKES_GALLERY':
            return {...state,details:[action.payload]}
        default:
            return state;
    }
}