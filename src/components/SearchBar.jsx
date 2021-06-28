import React, { Component } from 'react'

class SearchBar extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchQuery);
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row my-5">
                    <div className="col-10">
                         <input onChange={this.props.searchMovie} type="text" className="form-control " placeholder="Search a movie" />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary">
                            Add Movie
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;
