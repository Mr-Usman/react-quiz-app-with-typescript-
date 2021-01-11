import React, {useState} from 'react';
import { questionPropsType } from '../types/quiz_types';

const QuizData: React.FC<questionPropsType> = ({
    submitQuestion,
    question, 
    options,
    answer
}) => {
    let [selectedAnswer, setSelectedAnswer] = useState("");

    const onSelect = (selectedOption: string, answer: string) => {
        setSelectedAnswer(selectedOption);
    }

    const submitQuest = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        submitQuestion(selectedAnswer, answer);
    }
    
    return(
         <div>
             <span>Question: {question}</span>

             <form onSubmit={submitQuest}>
                {
                    options.map((option: string, index: number) => {
                        return (
                            <div key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name="optionanswere"
                                        required
                                        value={option}
                                        onChange={(e) => onSelect(e.target.value, answer)}
                                        checked={selectedAnswer === option}
                                    />
                                    {option}
                                </label>
                            </div>
                        )
                    })
                }
                  <button type="submit">Next</button>
             </form>
         </div>
    )
};

export default QuizData;