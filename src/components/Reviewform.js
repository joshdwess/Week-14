import React from "react";
import Review from "./review";
let event = React.createElement;

export default class Reviewform extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: '', reviews:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
          event.preventDefault();
          
         let tempReviews = this.state.reviews
         tempReviews.push(this.state.value)
         this.setState({reviews:tempReviews}) 
        
       

  }
         
      
    render()
        {
            debugger;
            return(
                <> 
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" placeholder="Leave a review"/>
                    </form>
                    {this.state.reviews.map(
                        (review,index) => (
           
                            <Review review={review}  />
            
                        )     
                    )
         
                    }
        </>
            )
        }
}
  

       
        