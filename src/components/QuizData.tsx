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
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        onChange={(e) => onSelect(e.target.value, answer)}
                                        checked={selectedAnswer === opt}
                                    />
                                    {opt}
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