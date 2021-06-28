import React, { Component } from 'react';
import axios from 'axios';

class EditMovie extends Component {

    state={
        name:"",
        rating:"",
        overview:"",
        imageURL:""
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const response=await axios.get(`http://localhost:3004/movies/${id}`);
        const movie=response.data;
        this.setState({
            name:movie.name,
            rating:movie.rating,
            overview:movie.overview,
            imageURL:movie.imageURL
        });
    }

    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        const {name,rating,overview,imageURL}=this.state;
        const id=this.props.match.params.id;
        const updatedMovie={
            name,
            rating,
            overview,
            imageURL
        }
        if(updatedMovie.name!=""&&updatedMovie.imageURL!=""&&updatedMovie.rating!=""&&updatedMovie.overview){
            this.props.onEditMovie(id,updatedMovie);
        this.props.history.push('/');
        }else{
            alert("Lütfen tüm alanları doldurunuz.");
        }
    }

    render() {
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled/>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"
                                value={this.state.rating}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"
                                value={this.state.imageURL}
                                onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea className="form-control"                         name="overview" rows="5"
                        value={this.state.overview}
                        onChange={this.onInputChange}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-100 my-3" value="Save Changes" />
            </form>
        </div>
        )
    }
}

export default EditMovie;
