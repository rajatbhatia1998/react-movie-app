import {takeEvery,put,call} from 'redux-saga/effects'
const API_KEY = '5b590a2f'

export function searchMovies (movieName,data){
    return{
        type:"SEARCH_MOVIE",
        movieName:movieName,
        payload:data
    }
}
function apiCall(url){
    let  data = fetch(url)
    .then(response=>response.json())
    .then(res=>data=res)
    .catch(error=>console.log(error))
    return data
}
function* fetchMoviesApi(action){
   
    yield put({type:"SEARCHING"})
    const data = yield call(apiCall,`http://www.omdbapi.com/?apikey=${API_KEY}&s='${action.payload}`)
    console.log(data)
    if(data.Response==="True"){
        yield put({type:"SEARCH_MOVIE",payload:data,movieName:action.payload})
    }else{
        yield put({type:"DEFAULT"})
        alert(data.Error)
    }
   
}

export function* watchSaga(){
    yield takeEvery('FETCH_MOVIES',fetchMoviesApi)
}
