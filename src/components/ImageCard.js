import React from "react";

class ImageCard extends React.Component{


    constructor(props){
        super(props);
        this.state ={span:0};
        this.imageRef = React.createRef();
    }

    setSpans= ()=>{
        const height = this.imageRef.current.height;
        const span = Math.ceil(height/10); 
        this.setState({span});
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
       
    }
    render(){
        
        const {description,urls} = this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}> 
                <img
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>
        );
    }
}


export default ImageCard;