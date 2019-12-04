
const initialState = {
    movieName:"",
    movies:[],
    isLoading:false,
    movie:[],
    searchResults:null
}

export default function movieReducer(state=initialState , action){
    switch(action.type){
        case "SEARCH_MOVIE":
            return {
                movieName:action.movieName,
                movies:action.payload.Search,
                searchResults:action.payload.totalResults,
                isLoading:false,
                movie:[]
            }
            case "SEARCHING":
                return{
                    ...state,
                    isLoading:true
                }
            case "DEFAULT":
                return{
                    movieName:"",
                    movies:[],
                    isLoading:false,
                    movie:[],
                    searchResults:null
                }
        default :
            return state;
    }
    
}