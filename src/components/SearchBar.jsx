import React, { Component } from 'react'

class SearchBar extends Component {

    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.searchQuery);
    }
    render() {
        return (
           <form onSubmit={this.handleFormSubmit}>
               <div className="form-row my-5">
                   <div className="col-12">
                       <input onChange={this.props.searchMovie} type="text" className="form-control" placeholder="Search a movie"/>
                   </div>
               </div>
           </form>
        )
    }
}

export default SearchBar;
