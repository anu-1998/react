import React,{useState} from 'react'
import "./styles.css"

const App = ()=>{

    let [score, setScore] = useState(0)
    
    return(
        <div className="container">
             <h1> Counter Application </h1>
             <h3>The value of score is:- {score}</h3>
             <div className="btn">
                <button className="btn1" onClick={()=>(score<25)? setScore(score+1) : ""}> + </button>
                <button className="btn1" onClick={()=>{setScore(0)}}> Reset </button>
                <button className="btn1" onClick={()=>(score>0)? setScore(score-1) : "" }> -</button>
                
             </div>
        </div>
    )
}

export default App