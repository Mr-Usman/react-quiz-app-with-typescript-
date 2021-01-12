import React, { useState, useEffect } from 'react';
import './App.css';
import { getQuizData } from './services/quiz_service';
import { QuizType, QuestionType } from "./types/quiz_types";

import QuizData from './components/QuizData';

function App() {
  const [ quizData, setQuizData ] = useState<QuizType[]>([]);
  const [ questionNumber, setQuestionNumber ] = useState(0);
  const [ showResult, setShowResults ] = useState(false);
  let  [ score, setScore ] = useState(0);

  enum QuestionDifficultyLevel {
    "easy" = 1,
    "hard" = 2
  }

  useEffect(() => {
    async function getQuiz() {
      const questions: QuizType[] = await getQuizData(5, QuestionDifficultyLevel[2]);
      setQuizData(questions);
    }
    getQuiz();
  },[]);

  const questionSubmitHandler = (selectedAnswer: string, answer: string) => {

    if(selectedAnswer === answer) {
        setScore(++score);
    }

    if(questionNumber !== quizData.length -1 ) {
       setQuestionNumber(questionNumber + 1);
    }
    else if(questionNumber >= quizData.length -1) {
      setShowResults(true);
    }
  }

  if(!quizData.length) {
     return <h1>Loading...</h1>
  }

  if(showResult) {
    return (
        <div className="container">
            <h1>Quiz Finished</h1>
            <h3>Maximum score: {quizData.length}</h3>
            <h3>Correct Answers: {score}</h3>
            <h3>Incorrect Answers: {quizData.length - score}</h3>

            {/* <h1>All Questions With Correct Answeres</h1> */}
        </div>
    )
  }

  return (
    <div>
            <div className="container">
                <h1>Answer the following Questions.</h1>
                  {
                      quizData && quizData.length > 0 && (
                        <QuizData
                          submitQuestion={questionSubmitHandler}
                          question={quizData[questionNumber].question}
                          options={quizData[questionNumber].options}
                          answer={quizData[questionNumber].answer}
                      />
                      )
                  }
          </div>
    </div>
  );
}

export default App;
