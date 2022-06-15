import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./Search";

class App extends React.Component{
    state ={images : []}; 
   
     onSubmitClick = async (data)=>{

        
       const response =  await unsplash.get('search/photos',{
        
        params: {
            query:data
            }
        });

        this.setState({images: response.data.results});
        // console.log(response.data.results);



        // axios.get('https://api.unsplash.com/search/photos',{
        //     headers : {
        //         Authorization: 'Client-ID tY95JUGmgfbL7EVUvsnk2pjXLEM_72dNoO5g143_iGI'
        //     },
        //     params: {
        //         query:data
        //         },
        //     }).then(response => {
        //         console.log(response.data.results);
        //     });
    }
    render(){
        return (
        <div className="ui container" style={{marginTop: "20px"}}>
            <SearchBar onSubmitClick={this.onSubmitClick}/>
            Found {this.state.images.length} items.
            <ImageList images={this.state.images}/>
         </div>);
    }
}

export default App;