





export default function Title({score, highScore}){



    return <div className="title">
        <h1>Memory Game</h1>
        <p>Get points by clicking on images, but don't click on an image more than once!</p>
        <p>score: {score}</p>
        <p>HighScore: {highScore}</p>
    </div>
}