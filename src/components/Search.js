import React from "react";



class SearchBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    state= {term:''};

    onFormSubmit(e){
        e.preventDefault();
        this.props.onSubmitClick(this.state.term);
    }


    render(){
        return(
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                <div className="field">                
                    <label>Seach Here</label>
                    
                    <input type="text" value={this.state.term} 
                    onChange={event=> this.setState({term: event.target.value})}/>
                 </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;