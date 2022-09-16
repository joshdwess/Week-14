import React from "react";
import Reviewform from "./Reviewform";
import Stars from "./stars"

const Movielist = (props) => {
    //For each movie this will render a div tag which houses an image tag which displays the movie posters
    return (
        <>  
            {props.movies.map(
                (movie, index) => (
            
                    <div className="container">
                        <Stars/>
                        <img src={movie.Poster} alt='movie'></img>
                        <Reviewform />
                       
                    </div>
                )
            )
            }
        </>
    );
}; 

export default Movielist;