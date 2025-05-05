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
      async function getCards(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        for (let i = 1; i <= 12; i++){
           console.log(i);
           await fetch(url + i + "/").
           then(function(response){
              return response.json()
           }).then(function(response){
               initialList[i - 1] = {sprite : response.sprites.other["official-artwork"].front_default,name:response.name,clicked : false, key : crypto.randomUUID()};        
     })
            if (i == 12){
               setCards(initialList);
            }
      }
     }
     getCards();
    }
    else{
      if (score > highScore){
        setHighScore(score);
      }
     let shuffled = [];
     let helper = [0,0,0,0,0,0,0,0,0,0,0,0];
     for (let i = 0; i < 12; i++){
         let random = Math.floor(Math.random() * 12);
         while (helper[random] == 1){
               random = Math.floor(Math.random() * 12);
         }
        helper[random] = 1;
        shuffled.push(cards[random]);
        if (score == 0){
         if (cards[random].clicked){
            shuffled[shuffled.length - 1].clicked = false;
         }
        }
     }
     setCards(shuffled);
    }
  }, [score]);


  function handleInput(clickedbefore, key){
        if (clickedbefore){
           setScore(0);
        }
        else{
          setCards((prev) => prev.map((item) =>{
             if (item.key == key){
                item.clicked = true;
               return item;
             }
             else{
               return item;
             }
          }))
          setScore(score + 1);
        }

  }
  return (<>
        <Title score={score} highScore={highScore}/>
        {cards.length > 0 ? <Cards cards={cards} clicked={handleInput} where={"cards"}/>  
         
        : <Cards cards={initialList} clicked={(clicked, key)=> handleInput(clicked, key) } where={"initialList"}/>}
    </>
  )
}


