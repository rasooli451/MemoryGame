import { useState , useEffect} from 'react'
import './App.css'

import Cards from './Components/Cards';
import Title from './Components/Title';

export default function App() {
  //Component for displaing cards, another component for cards themselves that recieves props such as character img
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);



  const initialList = [0,0,0,0,0,0,0,0,0,0,0,0];


  
  


  useEffect(()=>{
     if (cards.length == 0){
      let url = "https://pokeapi.co/api/v2/pokemon/";
      for (let i = 1; i <= 12; i++){
         fetch(url + i + "/").
         then(function(response){
              return response.json()
         }).then(function(response){
        initialList[i - 1] = response.sprites.other["official-artwork"].front_default + "," + response.name;
        setCards(initialList);
     })
     }
    }
    else{
      let shuffled = [];
     let helper = [0,0,0,0,0,0,0,0,0,0,0,0];
     for (let i = 0; i < 12; i++){
         let random = Math.floor(Math.random() * 12);
         while (helper[random] == 1){
               random = Math.floor(Math.random() * 12);
         }
        helper[random] = 1;
        shuffled.push(cards[random]);
     }
     setCards(shuffled);
    }
  }, [score]);

  function handleScore(){
    setScore(score + 1);
  }

  function handleInput(){

  }
  return (<>
        <Title score={score} highScore={highScore}/>
        {cards.length > 0 ? <Cards cards={cards} clicked={handleInput}/>  
         
        : <Cards cards={initialList} clicked={handleInput}/>}
    </>
  )
}


