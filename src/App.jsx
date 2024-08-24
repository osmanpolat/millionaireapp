import { useEffect, useState } from "react";
import "./App.css"
import Pyramid from "./components/Pyramid.jsx";
import Trivia from "./components/Trivia.jsx";
import data from "./data/data.js";
import moneyPyramids from "./data/moneyPyramid.js";
import Timer from "./components/Timer.jsx";


function App() {

  const [questionNumber,setQuestionNumber]=useState(1)
  const [stop,setStop]=useState(false)
  const [earned,setEarned]=useState("$ 0")

  useEffect(()=>{
    questionNumber>1 &&setEarned(moneyPyramids.find(m=>m.id===questionNumber-1).amount)
  },[questionNumber])
  
  return (
    <div className="app">
      <div className="main">
        {stop ? (<h1 className="endText">You earned: {earned}</h1> ):(
          <>
          <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
        </div>
        <div className="bottom"><Trivia 
        data={data}
        setStop={setStop}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        
         />
         </div>
         </>
        )}
        
      </div>
      <Pyramid questionPyramid={questionNumber}/>
    </div>
  );
}

export default App;
