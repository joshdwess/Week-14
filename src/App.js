import React,{useState} from 'react';
import Movielist from './components/Movielist';
import './App.css';

const App = () => {
  const [movies,setMovies]= useState([
    { reviews:[],
      id: 0,
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg'
        
    },
    { reviews:[],
      id: 1,
      Title: 'The Lord of the Rings: The Two Towers',
      Poster: 
      'https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg?20200102162536'
    },
    { reviews:[],
       id: 2,
      Title:'The Lord of the Rings: The Return of the King',
      Poster: 
      'https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg?20200102162547'
    },
    { reviews:[],
      id: 3,
      Title:'The Hobbit: An Unexpected Journey',
     Poster:'https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg'
    },
    { reviews:[], 
      id: 4,
      Title:'The Hobbit: The Desolation of Smaug',
     Poster:
     'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg'
    },
    { reviews:[],
      id: 5,
      Title:'The Hobbit: The Battle of the Five Armies',
    Poster:
    'https://upload.wikimedia.org/wikipedia/en/e/e7/The_Hobbit_-_The_Battle_of_the_Five_Armies.png'
},
]);

  return (
    <div className='container movie-row'>
      <div className='row'>
        <Movielist movies={movies}/>
        
      </div>
      
    </div>
  );
};

export default App;
