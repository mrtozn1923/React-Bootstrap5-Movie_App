import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component{
    
    state={
        movies: [],
        searchQuery:""
    }

    async componentDidMount(){
        const baseURL=" http://localhost:3004/movies";
        const response=await fetch(baseURL);
        const data=await response.json();
        this.setState({movies:data});
    }
    
    deleteMovie=(movie)=>{
        const newMovieList=this.state.movies.filter(
            m=>m.id!==movie.id
        );
        this.setState(()=>({
            movies:newMovieList
        }));
    }

    searchMovie=(e)=>{
        this.setState({searchQuery:e.target.value});
    }

    render(){
        let filteredMovies=this.state.movies.filter(
            (movie)=>{
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
            }
        )
        return(
            <div className="container">
                <div className="row">
                    <h1 className="text-center mt-3">REACTJS - MOVIE APP</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovie={this.searchMovie}/>
                    </div>
                </div>
                <MovieList 
                    movies={filteredMovies}
                    deleteMovie={this.deleteMovie}
                />
            </div>
        )
    }  
}
export default App;