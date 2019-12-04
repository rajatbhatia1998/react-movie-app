import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {searchMovies} from '../actions/actions'
import MoviePreview from './Movies/MoviePreview'


 class Movies extends Component {
    constructor(){
        super()
        this.state = {
            movieName:""
        }
    }
    render() {
        
        return (
            <div>
                <div className="searchForm">
                    <input 
                    className="searchInput"
                    onChange={(e)=>{this.setState({movieName:e.target.value})}}
                    placeholder="Search Movie"/><br/>
                    <Button variant="contained" color="primary"
                    onClick={()=>{
                        this.props.fetchMovies(this.state.movieName)}}
                    >
                        Search
                    </Button>
                </div>
                {this.props.isLoading?<h1>LOADING.....</h1>:
                
                    <div className="movieContainer">
                            {this.props.searchResults ===null? null:<h4>Results Found:{this.props.searchResults}<br/></h4>}
                            {this.props.movies.length!==0?(
                            <div>
                                <MoviePreview searchResults={this.props.searchResults} movies={this.props.movies}></MoviePreview>
                            </div>
                            ):null}
                    </div>
                }
               
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    movies:state.movies,
    isLoading:state.isLoading,
    movieName:state.movieName,
    searchResults:state.searchResults
})
const mapDispatchToProps = (dispatch)=>{
    return{
        searchMovies: (movieName) => dispatch(searchMovies(movieName)),
        fetchMovies:(movieName)=>dispatch({type:'FETCH_MOVIES',payload:movieName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movies)
