import { useState , useEffect} from 'react'
import './App.css'

export default function App() {
  //Component for displaing cards, another component for cards themselves that recieves props such as character img
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=>{
     let shuffled = [];

  }, [score]);
  return (<>
    </>
  )
}


