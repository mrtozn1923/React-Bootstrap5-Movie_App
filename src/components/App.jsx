import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3004/movies");
        this.setState({ movies: response.data });
    }

    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3004/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(() => ({
            movies: newMovieList
        }));
    }

    searchMovie = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    addMovie=async (movie)=>{
        await axios.post(`http://localhost:3004/movies/`,movie)
        this.setState(state=>({
            movies:state.movies.concat([movie])
        }))
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <h1 className="text-center mt-3">REACTJS - MOVIE APP</h1>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchMovie={this.searchMovie} />
                                    </div>
                                </div>

                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovie={this.deleteMovie}
                                />
                            </React.Fragment>
                        )}>
                        </Route>
                        <Route path="/add" exact render={({history})=>(
                            <AddMovie 
                            onAddMovie={(movie)=>{this.addMovie(movie)
                                    history.push("/")
                                 }
                            }
                            />
                        )}>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;