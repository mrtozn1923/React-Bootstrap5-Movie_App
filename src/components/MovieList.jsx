import React from 'react';
import {Link} from 'react-router-dom';

//state kullanma ihtiyacımız olmadığı için stateless functional component kullanabiliriz.
const MovieList = (props)=> {

    const truncateOverview=(string,maxLength)=>{
        if(!string) return null;
        if(string.length<=maxLength) return string;
        return `${string.substring(0,maxLength)} ...`;
    }

    return (
        <div className="row">
            {props.movies.map((movie,i) => (
                <div className="col-12 col-sm-6 col-lg-4" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview,100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={()=>props.deleteMovie(movie)}>Delete</button>
                                <Link type="button" className="btn btn-outline-warning" to={`edit/${movie.id}`}>Edit</Link>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;
