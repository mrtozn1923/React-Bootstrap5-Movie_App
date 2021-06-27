import React, { Component } from 'react'

class SearchBar extends Component {
    state={
        searchQuery:""
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.searchQuery);
    }
    render() {
        return (
           <form onSubmit={this.handleFormSubmit}>
               <div className="form-row my-5">
                   <div className="col-12">
                       <input onChange={(e)=>this.setState({searchQuery:e.target.value})} type="text" className="form-control" placeholder="Search a movie" value={this.state.searchQuery}/>
                   </div>
               </div>
           </form>
        )
    }
}

export default SearchBar;
